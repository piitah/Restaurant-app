import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrapvue from 'bootstrap-vue'
import vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import "vue-awesome/icons"
import Icon from "vue-awesome/components/Icon"
import 'vuetify/dist/vuetify.css'
import 'vuetify/dist/vuetify.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/es/components/modal/modal'
import 'bootstrap-vue/es/directives/modal/modal'
import './assets/animate.css'
import Store from '../src/views/admin/store.vue'
import addItem from '../src/views/admin/addItem.vue'
import order from '../src/views/admin/order.vue'

Vue.config.productionTip = false;

Vue.use(bootstrapvue)
Vue.use(vuetify)
Vue.use(VueSweetalert2)
Vue.component("Store", Store)
Vue.component("addItem", addItem)
Vue.component("order", order)
Vue.component("icon", Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
