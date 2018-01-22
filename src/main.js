import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store/store'
import VueI18n from 'vue-i18n'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

Vue.use(VueI18n)
Vue.use(Vuetify)
Vue.config.productionTip = false

// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  render: h => h(App)
})
