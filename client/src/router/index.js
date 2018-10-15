import Vue from 'vue'
import Router from 'vue-router'
import KyberInteraction from '@/components/KyberInteraction/KyberInteraction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'kyber_interaction',
      component: KyberInteraction
    }
  ]
})
