import Vue from 'vue';
import Router from 'vue-router';
import Settings from '@/views/Settings';
import MultiStitcher from '@/views/MultiStitcher';
import LogOutput from '@/views/LogOutput';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index.html', redirect: { name: 'multistitcher' }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/',
      name: 'multistitcher',
      component: MultiStitcher
    },
    {
      path: '/logoutput',
      name: 'logoutput',
      component: LogOutput
    }
  ]
})
