<template>
  <div class="glass-card rounded-[32px] p-6 md:p-8 mb-20 border border-blue-500/20">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
      <div>
        <p class="text-sm font-semibold text-blue-400 mb-3">{{ t.pricing_calc_eyebrow }}</p>
        <h2 class="text-3xl font-bold mb-3">{{ t.pricing_calc_title }}</h2>
        <p class="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">{{ t.pricing_calc_desc }}</p>
      </div>
      <button
        class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-sm font-bold hover:bg-white/15 transition-colors"
        type="button"
        @click="$emit('requestQuote')"
      >
        <iconify-icon icon="heroicons:document-text"></iconify-icon>
        <span>{{ t.pricing_calc_send }}</span>
      </button>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label class="space-y-2">
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_provider }}</span>
          <select v-model="provider" class="input-field">
            <option v-for="option in providerOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </label>

        <label class="space-y-2">
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_service }}</span>
          <select v-model="serviceType" class="input-field">
            <option v-for="option in currentServiceOptions" :key="option.value" :value="option.value">{{ t[option.label] }}</option>
          </select>
        </label>

        <label class="space-y-2">
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_region }}</span>
          <select v-model="region" class="input-field">
            <option v-for="option in regionOptions" :key="option.value" :value="option.value">{{ t[option.label] }}</option>
          </select>
        </label>

        <label class="space-y-2">
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_users }}</span>
          <input v-model.number="monthlyUsers" class="input-field" min="1" step="1000" type="number">
        </label>

        <label class="space-y-2">
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_minutes }}</span>
          <input v-model.number="minutesPerUser" class="input-field" min="1" step="5" type="number">
        </label>

        <label v-if="provider !== 'agora'" class="space-y-2">
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_quality }}</span>
          <select v-model="quality" class="input-field">
            <option v-for="option in qualityOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </label>

        <div class="space-y-2">
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_addons }}</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              v-for="option in addonOptions"
              :key="option.value"
              class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-gray-300 cursor-pointer hover:bg-white/10"
            >
              <input v-model="addons" class="w-4 h-4 rounded border-white/10 bg-white/5" type="checkbox" :value="option.value">
              <span>{{ t[option.label] }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="rounded-3xl bg-[#050810]/70 border border-white/10 p-6 md:p-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="rounded-2xl bg-white/5 p-5">
            <p class="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">{{ usageLabel }}</p>
            <p class="text-2xl font-bold text-white">{{ formattedUsage }}</p>
          </div>
          <div class="rounded-2xl bg-white/5 p-5">
            <p class="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">{{ t.pricing_calc_official_cost }}</p>
            <p class="text-2xl font-bold text-white">{{ formattedOfficialCost }}</p>
          </div>
          <div class="rounded-2xl bg-blue-500/10 border border-blue-400/20 p-5 sm:col-span-2">
            <p class="text-xs uppercase tracking-[0.18em] text-blue-300 mb-2">{{ t.pricing_calc_discount_cost }}</p>
            <p class="text-3xl font-bold text-cyan-300">{{ formattedDiscountedCost }}</p>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <p class="text-sm font-bold mb-2">{{ t.pricing_calc_recommendation }}</p>
            <p class="text-sm text-gray-300 leading-relaxed">{{ recommendation }}</p>
          </div>
          <div>
            <p class="text-sm font-bold mb-2">{{ t.pricing_calc_note_title }}</p>
            <p class="text-xs text-gray-500 leading-relaxed">{{ t.pricing_calc_note }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { messages } from '~/data/i18n'

type OptionKey = keyof typeof messages.zh
type Provider = 'tencent' | 'byteplus' | 'agora'
type ServiceType = 'tencentLeb' | 'byteplusStandard' | 'byteplusRtm' | 'agoraBroadcast' | 'agoraInteractive' | 'agoraVideoHd' | 'agoraVideoFullHd'
type Region = 'mainland' | 'asiaPacific1' | 'asiaPacific2' | 'asiaPacific3' | 'northAmerica' | 'europe' | 'global'
type Quality = '480p' | '720p' | '1080p' | '4k'
type Addon = 'recording' | 'transcoding' | 'lowLatency' | 'integration'
type TrafficTier = { upToGb: number, rate: number }

const emit = defineEmits<{
  'update:summary': [value: string]
  requestQuote: []
}>()
defineProps<{
  summary?: string
}>()

const { currentLang } = useDomI18n()
const t = computed(() => messages[currentLang.value])

const provider = ref<Provider>('tencent')
const serviceType = ref<ServiceType>('tencentLeb')
const region = ref<Region>('asiaPacific1')
const monthlyUsers = ref(10000)
const minutesPerUser = ref(30)
const quality = ref<Quality>('720p')
const addons = ref<Addon[]>(['transcoding'])

const providerOptions: Array<{ value: Provider, label: string }> = [
  { value: 'tencent', label: 'Tencent Cloud CSS' },
  { value: 'byteplus', label: 'BytePlus MediaLive' },
  { value: 'agora', label: 'Agora' }
]

const serviceOptions: Record<Provider, Array<{ value: ServiceType, label: OptionKey }>> = {
  tencent: [
    { value: 'tencentLeb', label: 'pricing_calc_service_tencent_leb' }
  ],
  byteplus: [
    { value: 'byteplusStandard', label: 'pricing_calc_service_byteplus_standard' },
    { value: 'byteplusRtm', label: 'pricing_calc_service_byteplus_rtm' }
  ],
  agora: [
    { value: 'agoraBroadcast', label: 'pricing_calc_service_agora_broadcast' },
    { value: 'agoraInteractive', label: 'pricing_calc_service_agora_interactive' },
    { value: 'agoraVideoHd', label: 'pricing_calc_service_agora_video_hd' },
    { value: 'agoraVideoFullHd', label: 'pricing_calc_service_agora_video_full_hd' }
  ]
}

const currentServiceOptions = computed(() => serviceOptions[provider.value])

watch(provider, (value) => {
  const available = serviceOptions[value]
  if (!available.some((option) => option.value === serviceType.value)) {
    serviceType.value = available[0].value
  }
})

watch(serviceType, (value) => {
  if (value === 'agoraBroadcast' || value === 'agoraInteractive' || value === 'agoraVideoHd' || value === 'agoraVideoFullHd') {
    provider.value = 'agora'
  } else if (value === 'byteplusStandard' || value === 'byteplusRtm') {
    provider.value = 'byteplus'
  } else {
    provider.value = 'tencent'
  }
})

const regionOptions: Array<{ value: Region, label: OptionKey }> = [
  { value: 'mainland', label: 'pricing_calc_region_mainland' },
  { value: 'asiaPacific1', label: 'pricing_calc_region_ap1' },
  { value: 'asiaPacific2', label: 'pricing_calc_region_ap2' },
  { value: 'asiaPacific3', label: 'pricing_calc_region_ap3' },
  { value: 'northAmerica', label: 'pricing_calc_region_na' },
  { value: 'europe', label: 'pricing_calc_region_eu' },
  { value: 'global', label: 'pricing_calc_region_global' }
]

const qualityOptions: Array<{ value: Quality, label: string, bitrate: number }> = [
  { value: '480p', label: '480p · 0.8 Mbps', bitrate: 0.8 },
  { value: '720p', label: '720p · 2.5 Mbps', bitrate: 2.5 },
  { value: '1080p', label: '1080p · 5 Mbps', bitrate: 5 },
  { value: '4k', label: '4K · 12 Mbps', bitrate: 12 }
]

const addonOptions: Array<{ value: Addon, label: OptionKey }> = [
  { value: 'recording', label: 'pricing_calc_addon_recording' },
  { value: 'transcoding', label: 'pricing_calc_addon_transcoding' },
  { value: 'lowLatency', label: 'pricing_calc_addon_low_latency' },
  { value: 'integration', label: 'pricing_calc_addon_integration' }
]

const tencentLebRates: Record<Region, TrafficTier[]> = {
  mainland: [
    { upToGb: 2000, rate: 0.0846 },
    { upToGb: 10000, rate: 0.0813 },
    { upToGb: 50000, rate: 0.0780 },
    { upToGb: 100000, rate: 0.0715 },
    { upToGb: 1000000, rate: 0.0618 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0520 }
  ],
  asiaPacific1: [
    { upToGb: 2000, rate: 0.1496 },
    { upToGb: 50000, rate: 0.1398 },
    { upToGb: 100000, rate: 0.1171 },
    { upToGb: 1000000, rate: 0.1008 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0911 }
  ],
  asiaPacific2: [
    { upToGb: 2000, rate: 0.2472 },
    { upToGb: 50000, rate: 0.2276 },
    { upToGb: 100000, rate: 0.2114 },
    { upToGb: 1000000, rate: 0.1821 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.1691 }
  ],
  asiaPacific3: [
    { upToGb: 2000, rate: 0.2276 },
    { upToGb: 50000, rate: 0.2081 },
    { upToGb: 100000, rate: 0.1821 },
    { upToGb: 1000000, rate: 0.1626 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.1431 }
  ],
  northAmerica: [
    { upToGb: 2000, rate: 0.1431 },
    { upToGb: 50000, rate: 0.1268 },
    { upToGb: 100000, rate: 0.1008 },
    { upToGb: 1000000, rate: 0.0650 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0520 }
  ],
  europe: [
    { upToGb: 2000, rate: 0.1431 },
    { upToGb: 50000, rate: 0.1268 },
    { upToGb: 100000, rate: 0.1008 },
    { upToGb: 1000000, rate: 0.0650 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0520 }
  ],
  global: [
    { upToGb: 2000, rate: 0.1783 },
    { upToGb: 50000, rate: 0.1660 },
    { upToGb: 100000, rate: 0.1423 },
    { upToGb: 1000000, rate: 0.1151 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.1014 }
  ]
}

const byteplusStandardRates: Record<Region, TrafficTier[]> = {
  mainland: [
    { upToGb: 10000, rate: 0.034 },
    { upToGb: 50000, rate: 0.033 },
    { upToGb: 100000, rate: 0.030 },
    { upToGb: 1000000, rate: 0.026 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.021 }
  ],
  asiaPacific1: [
    { upToGb: 10000, rate: 0.069 },
    { upToGb: 50000, rate: 0.0598 },
    { upToGb: 100000, rate: 0.0529 },
    { upToGb: 1000000, rate: 0.0483 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.046 }
  ],
  asiaPacific2: [
    { upToGb: 10000, rate: 0.0897 },
    { upToGb: 50000, rate: 0.0748 },
    { upToGb: 100000, rate: 0.069 },
    { upToGb: 1000000, rate: 0.0575 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0518 }
  ],
  asiaPacific3: [
    { upToGb: 10000, rate: 0.1012 },
    { upToGb: 50000, rate: 0.0863 },
    { upToGb: 100000, rate: 0.0748 },
    { upToGb: 1000000, rate: 0.0667 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0621 }
  ],
  northAmerica: [
    { upToGb: 10000, rate: 0.0506 },
    { upToGb: 50000, rate: 0.0414 },
    { upToGb: 100000, rate: 0.0322 },
    { upToGb: 1000000, rate: 0.0253 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0219 }
  ],
  europe: [
    { upToGb: 10000, rate: 0.0506 },
    { upToGb: 50000, rate: 0.0414 },
    { upToGb: 100000, rate: 0.0322 },
    { upToGb: 1000000, rate: 0.0253 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0219 }
  ],
  global: [
    { upToGb: 10000, rate: 0.0722 },
    { upToGb: 50000, rate: 0.0607 },
    { upToGb: 100000, rate: 0.0522 },
    { upToGb: 1000000, rate: 0.0446 },
    { upToGb: Number.POSITIVE_INFINITY, rate: 0.0395 }
  ]
}

const byteplusRtmRates: Record<Region, TrafficTier[]> = Object.fromEntries(
  Object.entries(byteplusStandardRates).map(([key, tiers]) => [
    key,
    tiers.map((tier) => ({ upToGb: tier.upToGb, rate: tier.rate * 2 }))
  ])
) as Record<Region, TrafficTier[]>

const agoraRatesPerThousand: Record<ServiceType, number> = {
  agoraBroadcast: 0.59,
  agoraInteractive: 0.99,
  agoraVideoHd: 3.99,
  agoraVideoFullHd: 8.99,
  tencentLeb: 0,
  byteplusStandard: 0,
  byteplusRtm: 0
}

const selectedQuality = computed(() => qualityOptions.find((option) => option.value === quality.value) || qualityOptions[1])
const safeUsers = computed(() => Math.max(Number(monthlyUsers.value) || 0, 1))
const safeMinutes = computed(() => Math.max(Number(minutesPerUser.value) || 0, 1))
const trafficGb = computed(() => safeUsers.value * safeMinutes.value * selectedQuality.value.bitrate * 60 / 8 / 1024)
const participantMinutes = computed(() => safeUsers.value * safeMinutes.value)

function getTierRate(gb: number, tiers: TrafficTier[]) {
  return tiers.find((tier) => gb <= tier.upToGb)?.rate || tiers[tiers.length - 1].rate
}

function calculateProgressiveTrafficCost(gb: number, tiers: TrafficTier[]) {
  let remaining = gb
  let previousLimit = 0
  let total = 0

  for (const tier of tiers) {
    const tierSize = Math.min(remaining, tier.upToGb - previousLimit)
    if (tierSize <= 0) break
    total += tierSize * tier.rate
    remaining -= tierSize
    previousLimit = tier.upToGb
  }

  return total
}

const officialCost = computed(() => {
  if (provider.value === 'agora') {
    return participantMinutes.value / 1000 * agoraRatesPerThousand[serviceType.value]
  }

  if (provider.value === 'byteplus') {
    const rates = serviceType.value === 'byteplusRtm' ? byteplusRtmRates[region.value] : byteplusStandardRates[region.value]
    return calculateProgressiveTrafficCost(trafficGb.value, rates)
  }

  const rate = getTierRate(trafficGb.value, tencentLebRates[region.value])
  return trafficGb.value * rate
})
const discountedCost = computed(() => officialCost.value * 0.9)

const formattedTraffic = computed(() => {
  if (trafficGb.value >= 1000) return `${(trafficGb.value / 1000).toFixed(1)} TB`
  return `${Math.round(trafficGb.value).toLocaleString()} GB`
})

const formattedMinutes = computed(() => `${Math.round(participantMinutes.value).toLocaleString()} min`)
const usageLabel = computed(() => provider.value === 'agora' ? t.value.pricing_calc_minutes_usage : t.value.pricing_calc_traffic)
const formattedUsage = computed(() => provider.value === 'agora' ? formattedMinutes.value : formattedTraffic.value)

function formatUsd(value: number) {
  return `USD $${Math.max(value, 0).toLocaleString(undefined, { maximumFractionDigits: value < 100 ? 2 : 0 })}`
}

const formattedOfficialCost = computed(() => formatUsd(officialCost.value))
const formattedDiscountedCost = computed(() => formatUsd(discountedCost.value))
const pricingBasis = computed(() => {
  if (provider.value === 'agora') return `${formatUsd(agoraRatesPerThousand[serviceType.value])} / 1,000 min`

  if (provider.value === 'byteplus') {
    const rate = getTierRate(trafficGb.value, serviceType.value === 'byteplusRtm' ? byteplusRtmRates[region.value] : byteplusStandardRates[region.value])
    return `${formatUsd(rate)} / GB`
  }

  return `${formatUsd(getTierRate(trafficGb.value, tencentLebRates[region.value]))} / GB`
})

const recommendation = computed(() => {
  if (provider.value === 'agora') return t.value.pricing_calc_reco_agora
  if (provider.value === 'byteplus') return serviceType.value === 'byteplusRtm' ? t.value.pricing_calc_reco_byteplus_rtm : t.value.pricing_calc_reco_byteplus
  return t.value.pricing_calc_reco_tencent
})

const summary = computed(() => {
  const addonLabels = addons.value
    .map((value) => addonOptions.find((option) => option.value === value))
    .filter(Boolean)
    .map((option) => t.value[option!.label])
    .join(', ') || t.value.pricing_calc_addon_none

  return [
    `${t.value.pricing_calc_summary_title}:`,
    `${t.value.pricing_calc_provider}: ${providerOptions.find((option) => option.value === provider.value)!.label}`,
    `${t.value.pricing_calc_service}: ${t.value[currentServiceOptions.value.find((option) => option.value === serviceType.value)!.label]}`,
    `${t.value.pricing_calc_region}: ${t.value[regionOptions.find((option) => option.value === region.value)!.label]}`,
    `${t.value.pricing_calc_users}: ${safeUsers.value.toLocaleString()}`,
    `${t.value.pricing_calc_minutes}: ${safeMinutes.value.toLocaleString()}`,
    provider.value === 'agora' ? '' : `${t.value.pricing_calc_quality}: ${selectedQuality.value.label}`,
    `${t.value.pricing_calc_addons}: ${addonLabels}`,
    `${usageLabel.value}: ${formattedUsage.value}`,
    `${t.value.pricing_calc_rate_basis}: ${pricingBasis.value}`,
    `${t.value.pricing_calc_official_cost}: ${formattedOfficialCost.value}`,
    `${t.value.pricing_calc_discount_cost}: ${formattedDiscountedCost.value}`,
    `${t.value.pricing_calc_recommendation}: ${recommendation.value}`
  ].filter(Boolean).join('\n')
})

watch(summary, (value) => emit('update:summary', value), { immediate: true })
</script>
