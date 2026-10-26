<template>
  <ServiceLanding :content="content" :logo="logo" path="/service-byteplus" />
</template>

<script setup lang="ts">
import en from '~/data/service-guides/byteplus.en.json'
import zh from '~/data/service-guides/byteplus.zh.json'
import cn from '~/data/service-guides/byteplus.zh-cn.json'
import logo from '~/assets/images/BytePlus.png'

definePageMeta({ alias: ['/zh/service-byteplus', '/zh-cn/service-byteplus'] })
usePageSeo('serviceByteplus')
const { currentLang } = useDomI18n()
const translations = { en, zh, 'zh-cn': cn }
const content = computed(() => translations[currentLang.value])
</script>
