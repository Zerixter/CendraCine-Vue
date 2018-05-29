// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Datetime from 'vue-datetime'
import vSelect from 'vue-select'
import Vuetify from 'vuetify'
import 'swiper/dist/css/swiper.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-datetime/dist/vue-datetime.css'
import 'vuetify/dist/vuetify.min.css'
import moment from 'moment'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
Vue.use(Datetime);
Vue.use(Notifications);
Vue.use(Vuetify);
Vue.component('v-select', vSelect);
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY HH:mm')
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
