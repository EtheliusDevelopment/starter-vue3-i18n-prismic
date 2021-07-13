import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './index.css'
// About the below import
// See https://github.com/intlify/vite-plugin-vue-i18n#static-bundle-importing
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createPrismic } from "@prismicio/vue"
import linkResolver from './prismic/link-resolver.js'

const prismic = createPrismic({
  endpoint: "https://luxoback.prismic.io/api/v2",
  linkResolver,
  
  /* see references for more */
});

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages
})

createApp(App).use(i18n).use(prismic).mount('#app')
