<template>
  <main data-service-content>
    <header class="pt-40 pb-16 border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div class="max-w-4xl">
            <p class="text-blue-400 text-xs md:text-sm font-semibold tracking-wider mb-5">{{ content.kicker }}</p>
            <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6"><span class="text-gradient">{{ content.title }}</span></h1>
            <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">{{ content.lead }}</p>
            <div class="flex flex-wrap gap-4 mt-8">
              <NuxtLink class="px-6 py-3 bg-gradient-tech rounded-xl font-semibold" :to="localizePath('/pricing#cost-review')">{{ content.ctaLabel }}</NuxtLink>
              <NuxtLink class="px-6 py-3 border border-white/15 rounded-xl font-semibold hover:bg-white/5 transition-colors" :to="localizePath('/contact')">{{ content.contactLabel }}</NuxtLink>
            </div>
          </div>
          <div class="hidden lg:flex w-32 h-32 rounded-3xl bg-white/5 border border-white/10 items-center justify-center p-6" aria-hidden="true">
            <img :src="logo" alt="" class="max-w-full max-h-full object-contain" width="80" height="80" />
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-6 py-12 lg:py-16">
      <nav :aria-label="content.tocLabel" class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-16">
        <p class="font-semibold mb-4">{{ content.tocLabel }}</p>
        <ul class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-300">
          <li v-for="item in contents" :key="item.id"><a class="hover:text-white underline underline-offset-4" :href="`#${item.id}`">{{ item.title }}</a></li>
        </ul>
      </nav>

      <div class="max-w-5xl space-y-16 lg:space-y-20">
        <section id="overview" class="scroll-mt-40">
          <h2 class="text-3xl font-bold mb-6">{{ content.overviewTitle }}</h2>
          <p v-for="text in content.overview" :key="text" class="text-gray-300 leading-8 mb-5">{{ text }}</p>
        </section>

        <section id="features" class="scroll-mt-40">
          <h2 class="text-3xl font-bold mb-6">{{ content.featuresTitle }}</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <article v-for="feature in content.features" :key="feature.title" class="glass-card rounded-3xl p-6">
              <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
              <p class="text-gray-300 leading-7">{{ feature.text }}</p>
            </article>
          </div>
        </section>

        <section id="scenarios" class="scroll-mt-40">
          <h2 class="text-3xl font-bold mb-6">{{ content.scenariosTitle }}</h2>
          <div class="space-y-7">
            <article v-for="scenario in content.scenarios" :key="scenario.title">
              <h3 class="text-xl font-semibold mb-3">{{ scenario.title }}</h3>
              <p class="text-gray-300 leading-8">{{ scenario.text }}</p>
            </article>
          </div>
        </section>

        <section id="procurement" class="scroll-mt-40 rounded-3xl border border-blue-500/30 bg-blue-500/[0.05] p-6 md:p-9">
          <h2 class="text-3xl font-bold mb-6">{{ content.pricingTitle }}</h2>
          <p v-for="text in content.pricing" :key="text" class="text-gray-300 leading-8 mb-5">{{ text }}</p>
          <NuxtLink class="text-blue-300 font-semibold underline underline-offset-4" :to="localizePath('/pricing#cost-review')">{{ content.ctaLabel }}</NuxtLink>
        </section>

        <section id="implementation" class="scroll-mt-40">
          <h2 class="text-3xl font-bold mb-6">{{ content.stepsTitle }}</h2>
          <ol class="grid md:grid-cols-2 gap-6">
            <li v-for="step in content.steps" :key="step.title" class="border-l-2 border-blue-500/40 pl-6 py-2">
              <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
              <p class="text-gray-300 leading-7">{{ step.text }}</p>
            </li>
          </ol>
        </section>

        <section id="example" class="scroll-mt-40">
          <h2 class="text-3xl font-bold mb-4">{{ content.caseTitle }}</h2>
          <p class="text-sm text-amber-200 leading-6 border-l-2 border-amber-400/60 pl-4 mb-6">{{ content.caseLabel }}</p>
          <p v-for="text in content.caseStudy" :key="text" class="text-gray-300 leading-8 mb-5">{{ text }}</p>
        </section>

        <section id="faq" class="scroll-mt-40">
          <h2 class="text-3xl font-bold mb-6">{{ content.faqTitle }}</h2>
          <div class="divide-y divide-white/10 border-y border-white/10">
            <details v-for="faq in content.faqs" :key="faq.question" class="group py-5">
              <summary class="cursor-pointer text-lg font-semibold leading-7 marker:text-blue-400">{{ faq.question }}</summary>
              <p class="text-gray-300 leading-8 mt-4 pl-5">{{ faq.answer }}</p>
            </details>
          </div>
        </section>

        <section id="references" class="scroll-mt-40">
          <h2 class="text-2xl font-bold mb-5">{{ content.sourcesTitle }}</h2>
          <ul class="space-y-3 text-blue-300">
            <li v-for="source in content.sources" :key="source.url"><a class="underline underline-offset-4 hover:text-white" :href="source.url" target="_blank" rel="noopener noreferrer">{{ source.title }}</a></li>
          </ul>
          <div class="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-sm text-blue-300">
            <NuxtLink class="underline underline-offset-4" :to="localizePath('/services')">{{ content.compareLabel }}</NuxtLink>
            <NuxtLink class="underline underline-offset-4" :to="localizePath('/docs')">{{ content.docsLabel }}</NuxtLink>
          </div>
        </section>

        <section class="glass-card rounded-3xl p-7 md:p-10">
          <h2 class="text-3xl font-bold mb-5">{{ content.ctaTitle }}</h2>
          <p class="text-gray-300 leading-8 mb-7">{{ content.ctaText }}</p>
          <NuxtLink class="inline-flex px-6 py-3 bg-gradient-tech rounded-xl font-semibold" :to="localizePath('/pricing#cost-review')">{{ content.ctaLabel }}</NuxtLink>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { ServiceGuideContent } from '~/types/service-guide'
import { buildFaqSchema, serializeFaqSchema } from '~/utils/service-faq'
import { locales } from '~/utils/locales'

const props = defineProps<{ content: ServiceGuideContent; logo: string; path: string }>()
const { currentLang, localizePath } = useDomI18n()
const contents = computed(() => [
  { id: 'overview', title: props.content.overviewTitle },
  { id: 'features', title: props.content.featuresTitle },
  { id: 'scenarios', title: props.content.scenariosTitle },
  { id: 'procurement', title: props.content.pricingTitle },
  { id: 'implementation', title: props.content.stepsTitle },
  { id: 'example', title: props.content.caseTitle },
  { id: 'faq', title: props.content.faqTitle }
])

useHead(() => ({
  script: [{
    key: 'service-faq',
    type: 'application/ld+json',
    innerHTML: serializeFaqSchema(buildFaqSchema(props.content.faqs, `https://limelink.live${localizePath(props.path)}`, locales[currentLang.value].htmlLang))
  }]
}))
</script>
