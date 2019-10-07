import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import CardContainer from './views/CardContainer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE,
  routes: [
    {
      path: '/',
      name: 'card',
      component: CardContainer,
      props: true,
    },
  ]
})
