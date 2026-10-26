export interface ServiceGuideContent {
  kicker: string
  title: string
  lead: string
  tocLabel: string
  overviewTitle: string
  overview: string[]
  featuresTitle: string
  features: Array<{ title: string; text: string }>
  scenariosTitle: string
  scenarios: Array<{ title: string; text: string }>
  pricingTitle: string
  pricing: string[]
  stepsTitle: string
  steps: Array<{ title: string; text: string }>
  caseTitle: string
  caseLabel: string
  caseStudy: string[]
  faqTitle: string
  faqs: Array<{ question: string; answer: string }>
  sourcesTitle: string
  sources: Array<{ title: string; url: string }>
  ctaTitle: string
  ctaText: string
  ctaLabel: string
  contactLabel: string
  compareLabel: string
  docsLabel: string
}
