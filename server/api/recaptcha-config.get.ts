type RuntimeEvent = {
  context?: {
    cloudflare?: {
      env?: Record<string, string>
    }
  }
}

export default defineEventHandler((event: RuntimeEvent) => {
  const config = useRuntimeConfig(event)
  const cloudflareEnv = event.context?.cloudflare?.env || {}
  const siteKey = cloudflareEnv.RECAPTCHA_SITE_KEY || cloudflareEnv.NUXT_PUBLIC_RECAPTCHA_SITE_KEY || config.public.recaptchaSiteKey

  return {
    enabled: Boolean(siteKey),
    siteKey
  }
})
