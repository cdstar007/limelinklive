<template>
  <ServiceLanding :content="content" :logo="logo" path="/service-css" />
</template>

<script setup lang="ts">
import en from '~/data/service-guides/css.en.json'
import zh from '~/data/service-guides/css.zh.json'
import cn from '~/data/service-guides/css.zh-cn.json'
import logo from '~/assets/images/tencent.png'

definePageMeta({ alias: ['/zh/service-css', '/zh-cn/service-css'] })
usePageSeo('serviceCss')
const { currentLang } = useDomI18n()
const translations = { en, zh, 'zh-cn': cn }
const content = computed(() => translations[currentLang.value])
</script>
