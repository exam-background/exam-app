import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';
import location from '@/locations/location';
import commons from '@/locations/commons';
import axios from 'axios';
import qs from 'qs';

Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$location = location;
Vue.prototype.$commons = commons;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
