// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import el_module from 'element-ui'
import el_module from './el_module'
import mactchData from './assets/data'

Vue.config.productionTip = false

Vue.prototype.mactchData = mactchData;

// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(el_module);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
