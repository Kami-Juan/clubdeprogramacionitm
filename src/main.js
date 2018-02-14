import Vue from 'vue'
import App from './App.vue'
import router from './rutas/routes';

import VueImg from 'v-img';

Vue.use(VueImg);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
