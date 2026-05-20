import { messages } from '~/data/i18n'

const INQUIRY_EMAIL = 'support@limelink.live'

type InquiryStatus = 'idle' | 'submitting' | 'success' | 'error'

export function useInquiryEmail() {
  const { currentLang } = useDomI18n()
  const inquiryStatus = ref<InquiryStatus>('idle')
  const inquiryMessage = ref('')

  function resetRecaptcha() {
    const grecaptcha = (window as typeof window & {
      grecaptcha?: { reset: () => void }
    }).grecaptcha

    grecaptcha?.reset()
  }

  async function submitInquiry(event: Event, subject: string) {
    const form = event.currentTarget as HTMLFormElement | null
    if (!form || !import.meta.client) return

    inquiryStatus.value = 'submitting'
    inquiryMessage.value = ''
    const recaptchaToken = String(new FormData(form).get('recaptchaToken') || '')

    const fields = Array.from(form.elements)
      .filter((item): item is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement => {
        return item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement || item instanceof HTMLSelectElement
      })
      .filter((field) => field.name !== 'recaptchaToken' && field.name !== 'g-recaptcha-response')
      .filter((field) => {
        if (field instanceof HTMLInputElement && (field.type === 'checkbox' || field.type === 'radio')) {
          return field.checked
        }
        return Boolean(field.value)
      })
      .map((field) => {
        const labelText = field.closest('label')?.textContent?.trim()
        const groupLabel = field.closest('div')?.querySelector('label')?.textContent?.trim()
        const label = labelText || groupLabel || field.placeholder || field.name || 'Field'
        return `${label}: ${field.value || 'Selected'}`
      })

    const body = fields.length ? fields.join('\n') : 'New inquiry from LIMELINK website.'

    try {
      await $fetch('/api/inquiry', {
        method: 'POST',
        body: {
          subject,
          fields,
          body,
          page: window.location.href,
          recaptchaToken
        }
      })

      inquiryStatus.value = 'success'
      inquiryMessage.value = messages[currentLang.value].inquiry_success
      form.reset()
      resetRecaptcha()
    } catch (error) {
      console.error('Failed to submit inquiry', error)
      inquiryStatus.value = 'error'
      inquiryMessage.value = messages[currentLang.value].inquiry_error
      resetRecaptcha()
    }
  }

  return {
    inquiryEmail: INQUIRY_EMAIL,
    inquiryMessage,
    inquiryStatus,
    submitInquiry
  }
}
