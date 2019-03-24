import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import live from '@/views/live'
import mindex from '@/views/mindex'
import mlive from '@/views/mlive'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '',
      name: 'index',
      component: index,
      alias: '/index'
    },
    {
      path: '/live',
      name: 'live',
      component: live
    },
    {
      path: '/mindex',
      name: 'mindex',
      component: mindex
    },{
      path: '/mlive',
      name: 'mlive',
      component: mlive
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});


router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  let isMob = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  if (isMob&&(!from.name ||from.name=='index'||from.name=='live')&&to.name!='mindex'&&to.name!='mlive') {
    next('/mindex')
  } else if (!isMob&&to.name!='index'&&to.name!='live') {
    next('/index')
  } else {
    next();
  }
})

export default router;
