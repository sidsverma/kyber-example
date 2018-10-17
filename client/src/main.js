// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'Vuetify'
import VueMaterial from 'vue-material'
import Rubik from 'i-rubik'
import 'vue-material/dist/vue-material.css'

import vuescroll from 'vue-scroll'
//import Modal from './components/Home/FullScreenModal.vue'

// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'vuetify/dist/vuetify.min.css'

// import './static/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
Vue.use(Rubik)
Vue.use(vuescroll)
Vue.use(Vuetify)
Vue.use(VueMaterial)

Vue.config.productionTip = false
//Vue.component('modal', Modal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted(){
    this.$rubik.init()
  }
})
