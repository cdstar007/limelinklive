type InquiryPayload = {
  subject?: string
  fields?: string[]
  body?: string
  page?: string
  recaptchaToken?: string
}

function normalizeText(value: unknown, maxLength = 2000) {
  return String(value || '')
    .replace(/\r\n/g, '\n')
    .trim()
    .slice(0, maxLength)
}

type RuntimeEvent = {
  context?: {
    cloudflare?: {
      env?: Record<string, string>
    }
  }
}

function getWebhookConfig(event: RuntimeEvent) {
  const config = useRuntimeConfig(event)
  const cloudflareEnv = event.context?.cloudflare?.env || {}
  const webhookUrl = cloudflareEnv.FEISHU_WEBHOOK_URL || config.feishuWebhookUrl
  const webhookSecret = cloudflareEnv.FEISHU_WEBHOOK_SECRET || config.feishuWebhookSecret
  const recaptchaSecretKey = cloudflareEnv.RECAPTCHA_SECRET_KEY || config.recaptchaSecretKey

  return {
    webhookUrl,
    webhookSecret,
    recaptchaSecretKey
  }
}

async function verifyRecaptcha(token: string, secretKey: string) {
  const response = await $fetch<{ success?: boolean }>('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: token
    })
  })

  return Boolean(response.success)
}

async function createFeishuSign(timestamp: string, secret: string) {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(`${timestamp}\n${secret}`),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(''))
  const bytes = new Uint8Array(signature)
  let binary = ''

  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }

  return btoa(binary)
}

export default defineEventHandler(async (event) => {
  const { webhookUrl, webhookSecret, recaptchaSecretKey } = getWebhookConfig(event)

  if (!webhookUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Feishu webhook is not configured'
    })
  }

  const payload = await readBody<InquiryPayload>(event)
  const recaptchaToken = normalizeText(payload.recaptchaToken, 5000)
  const subject = normalizeText(payload.subject, 120) || 'Website inquiry'
  const fields = Array.isArray(payload.fields)
    ? payload.fields.map((field) => normalizeText(field, 500)).filter(Boolean)
    : []
  const body = normalizeText(payload.body)
  const page = normalizeText(payload.page, 500)

  if (!fields.length && !body) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Inquiry payload is empty'
    })
  }

  if (recaptchaSecretKey) {
    if (!recaptchaToken) {
      throw createError({
        statusCode: 400,
        statusMessage: 'reCAPTCHA verification is required'
      })
    }

    const recaptchaOk = await verifyRecaptcha(recaptchaToken, recaptchaSecretKey)

    if (!recaptchaOk) {
      throw createError({
        statusCode: 403,
        statusMessage: 'reCAPTCHA verification failed'
      })
    }
  }

  const message = [
    `【${subject}】`,
    '',
    fields.length ? fields.join('\n') : body,
    page ? `\n來源頁面: ${page}` : '',
    `提交時間: ${new Date().toISOString()}`
  ].filter(Boolean).join('\n')

  const feishuPayload: Record<string, unknown> = {
    msg_type: 'text',
    content: {
      text: message
    }
  }

  if (webhookSecret) {
    const timestamp = Math.floor(Date.now() / 1000).toString()
    feishuPayload.timestamp = timestamp
    feishuPayload.sign = await createFeishuSign(timestamp, webhookSecret)
  }

  try {
    await $fetch(webhookUrl, {
      method: 'POST',
      body: feishuPayload
    })
  } catch (error) {
    console.error('Failed to send Feishu webhook', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to send Feishu webhook'
    })
  }

  return {
    ok: true
  }
})
