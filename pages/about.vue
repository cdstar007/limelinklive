<script setup lang="ts">
const route = useRoute()
const target = route.path === '/zh/about' ? '/zh/docs' : '/docs'

definePageMeta({
  alias: ['/zh/about']
})

await navigateTo(target, { redirectCode: 301 })
</script>
