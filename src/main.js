import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router'
import AppLink from "@/components/AppLink.vue"

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.component("app-link", AppLink)
app.use(vuetify)
app.use(router)
app.mount('#app')
