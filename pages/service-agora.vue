<template>
  <ServiceLanding :content="content" :logo="logo" path="/service-agora" />
</template>

<script setup lang="ts">
import en from '~/data/service-guides/agora.en.json'
import zh from '~/data/service-guides/agora.zh.json'
import cn from '~/data/service-guides/agora.zh-cn.json'
import logo from '~/assets/images/Agora.png'

definePageMeta({ alias: ['/zh/service-agora', '/zh-cn/service-agora'] })
usePageSeo('serviceAgora')
const { currentLang } = useDomI18n()
const translations = { en, zh, 'zh-cn': cn }
const content = computed(() => translations[currentLang.value])
</script>
