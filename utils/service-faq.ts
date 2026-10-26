export function buildFaqSchema(faqs: ReadonlyArray<{ question: string; answer: string }>, url: string, language: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    inLanguage: language,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }
}

export function serializeFaqSchema(schema: ReturnType<typeof buildFaqSchema>) {
  return JSON.stringify(schema).replace(/</g, '\\u003c')
}
