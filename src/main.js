import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

// idiomas
import VueI18n from 'vue-i18n'
import {ES_AR} from './locale/es-ar';
// fin idiomas

Vue.config.productionTip = false


//idiomas
Vue.use(VueI18n)
const messages = {
  'ES_AR': {"message" : ES_AR.message},
}
const i18n = new VueI18n({
  locale: 'ES_AR',
  messages,
});
// fin idiomas

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
