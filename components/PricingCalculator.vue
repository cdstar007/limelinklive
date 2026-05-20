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
          <span class="block text-sm font-medium text-gray-400">{{ t.pricing_calc_service }}</span>
          <select v-model="serviceType" class="input-field">
            <option v-for="option in serviceOptions" :key="option.value" :value="option.value">{{ t[option.label] }}</option>
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

        <label class="space-y-2">
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
            <p class="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">{{ t.pricing_calc_traffic }}</p>
            <p class="text-2xl font-bold text-white">{{ formattedTraffic }}</p>
          </div>
          <div class="rounded-2xl bg-white/5 p-5">
            <p class="text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">{{ t.pricing_calc_cost }}</p>
            <p class="text-2xl font-bold text-cyan-300">{{ formattedCost }}</p>
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
type ServiceType = 'live' | 'rtc' | 'liveRtc' | 'vod'
type Region = 'asia' | 'northAmerica' | 'europe' | 'global'
type Quality = '480p' | '720p' | '1080p' | '4k'
type Addon = 'recording' | 'transcoding' | 'lowLatency' | 'integration'

const emit = defineEmits<{
  'update:summary': [value: string]
  requestQuote: []
}>()
defineProps<{
  summary?: string
}>()

const { currentLang } = useDomI18n()
const t = computed(() => messages[currentLang.value])

const serviceType = ref<ServiceType>('live')
const region = ref<Region>('asia')
const monthlyUsers = ref(10000)
const minutesPerUser = ref(30)
const quality = ref<Quality>('720p')
const addons = ref<Addon[]>(['transcoding'])

const serviceOptions: Array<{ value: ServiceType, label: OptionKey }> = [
  { value: 'live', label: 'pricing_calc_service_live' },
  { value: 'rtc', label: 'pricing_calc_service_rtc' },
  { value: 'liveRtc', label: 'pricing_calc_service_live_rtc' },
  { value: 'vod', label: 'pricing_calc_service_vod' }
]

const regionOptions: Array<{ value: Region, label: OptionKey }> = [
  { value: 'asia', label: 'pricing_calc_region_asia' },
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

const regionRates: Record<Region, { low: number, high: number }> = {
  asia: { low: 28, high: 58 },
  northAmerica: { low: 42, high: 92 },
  europe: { low: 46, high: 104 },
  global: { low: 58, high: 128 }
}

const serviceMultipliers: Record<ServiceType, number> = {
  live: 1,
  rtc: 1.45,
  liveRtc: 1.65,
  vod: 0.75
}

const selectedQuality = computed(() => qualityOptions.find((option) => option.value === quality.value) || qualityOptions[1])
const safeUsers = computed(() => Math.max(Number(monthlyUsers.value) || 0, 1))
const safeMinutes = computed(() => Math.max(Number(minutesPerUser.value) || 0, 1))
const trafficGb = computed(() => safeUsers.value * safeMinutes.value * selectedQuality.value.bitrate * 60 / 8 / 1024)
const trafficTb = computed(() => trafficGb.value / 1024)
const addonMultiplier = computed(() => 1 + addons.value.length * 0.08)
const costRange = computed(() => {
  const rates = regionRates[region.value]
  const baseTb = Math.max(trafficTb.value, 0.25)
  const multiplier = serviceMultipliers[serviceType.value] * addonMultiplier.value

  return {
    low: Math.round(baseTb * rates.low * multiplier),
    high: Math.round(baseTb * rates.high * multiplier)
  }
})

const formattedTraffic = computed(() => {
  if (trafficGb.value >= 1024) return `${(trafficGb.value / 1024).toFixed(1)} TB`
  return `${Math.round(trafficGb.value).toLocaleString()} GB`
})

const formattedCost = computed(() => {
  return `USD $${costRange.value.low.toLocaleString()} - $${costRange.value.high.toLocaleString()}`
})

const recommendation = computed(() => {
  if (serviceType.value === 'rtc') return t.value.pricing_calc_reco_rtc
  if (serviceType.value === 'liveRtc') return t.value.pricing_calc_reco_live_rtc
  if (serviceType.value === 'vod') return t.value.pricing_calc_reco_vod
  if (region.value === 'global') return t.value.pricing_calc_reco_global_live
  return t.value.pricing_calc_reco_live
})

const summary = computed(() => {
  const addonLabels = addons.value
    .map((value) => addonOptions.find((option) => option.value === value))
    .filter(Boolean)
    .map((option) => t.value[option!.label])
    .join(', ') || t.value.pricing_calc_addon_none

  return [
    `${t.value.pricing_calc_summary_title}:`,
    `${t.value.pricing_calc_service}: ${t.value[serviceOptions.find((option) => option.value === serviceType.value)!.label]}`,
    `${t.value.pricing_calc_region}: ${t.value[regionOptions.find((option) => option.value === region.value)!.label]}`,
    `${t.value.pricing_calc_users}: ${safeUsers.value.toLocaleString()}`,
    `${t.value.pricing_calc_minutes}: ${safeMinutes.value.toLocaleString()}`,
    `${t.value.pricing_calc_quality}: ${selectedQuality.value.label}`,
    `${t.value.pricing_calc_addons}: ${addonLabels}`,
    `${t.value.pricing_calc_traffic}: ${formattedTraffic.value}`,
    `${t.value.pricing_calc_cost}: ${formattedCost.value}`,
    `${t.value.pricing_calc_recommendation}: ${recommendation.value}`
  ].join('\n')
})

watch(summary, (value) => emit('update:summary', value), { immediate: true })
</script>
