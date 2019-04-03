// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import el_module from 'element-ui'
import el_module from './el_module';
import configData from './config/configData';
import api from './api/index'
console.log(ckplayer)

Vue.config.productionTip = false;

Vue.prototype.configData = configData;
Vue.prototype.api = api;

// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(el_module);

!(function(win) {
  win.addEventListener(
    'resize',
    function() {
      let isMob = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
        navigator.userAgent
      );
      if (isMob) {
        window.location.reload()
      }
    },
    false
  );
})(window);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
