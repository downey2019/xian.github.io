// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from 'vue';
import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import BaiduMap from 'vue-baidu-map';

// Vue.use(BaiduMap, {
//   ak: 'kCQ7cOzRD8ooC7TLegTMfK2ThjjcvmRy'
// })

Vue.use(ElementUI);
export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  appOptions.i18n.setLocaleMessage('english', require('./assets/lang/en'))
  appOptions.i18n.setLocaleMessage('chinese', require('./assets/lang/zh'))
}
