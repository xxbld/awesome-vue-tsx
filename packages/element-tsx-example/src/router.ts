import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'count'
    },
    {
      path: "/count",
      name: "count",
      component: () => import(/* webpackChunkName: "Count" */ "./views/Count")
    },
    {
      path: "/sfc",
      name: "sfc",
      component: () => import(/* webpackChunkName: "SFC" */ "./views/SFC.vue")
    },
    {
      path: "/sfcts",
      name: "sfcts",
      component: () => import(/* webpackChunkName: "SFC" */ "./views/SFCts.vue")
    },
    {
      path: "/sfctsx",
      name: "sfctsx",
      component: () => import(/* webpackChunkName: "SFC" */ "./views/SFCtsx.vue")
    },
  ]
})
