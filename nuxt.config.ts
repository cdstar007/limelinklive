export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    feishuWebhookUrl: '',
    feishuWebhookSecret: '',
    recaptchaSecretKey: '',
    public: {
      recaptchaSiteKey: ''
    }
  },
  nitro: {
    preset: 'cloudflare_pages',
    cloudflare: {
      pages: {
        routes: {
          exclude: [
            '/sitemap.xml',
            '/sitemap-index.xml',
            '/sitemap-en.xml',
            '/sitemap-zh.xml'
          ]
        }
      }
    },
    prerender: {
      routes: []
    }
  },
  experimental: {
    appManifest: false
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'iconify-icon'
    }
  },
  app: {
    head: {
      titleTemplate: (titleChunk) => titleChunk ? `${titleChunk}` : 'LIMELINK | Cloud Video Service Agent',
      htmlAttrs: { lang: 'en', class: 'scroll-smooth' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
        }
      ],
      script: [
        { src: 'https://modao.cc/agent-py/static/source/js/tailwindcss.js' },
        { src: 'https://modao.cc/agent-py/static/source/js/iconify-icon.min.js' }
      ]
    }
  }
})
