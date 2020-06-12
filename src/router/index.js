import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home.vue'
import NEWS from '@/page/news.vue'
import ARTISTS from '@/page/artists.vue'
import SCHEDULE from '@/page/schedule.vue'
import VIDEOS from '@/page/videos.vue'
import ABOUT from '@/page/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/NEWS',
      name: 'NEWS',
      component: NEWS
    }, {
      path: '/ARTISTS',
      name: 'ARTISTS',
      component: ARTISTS
    }, {
      path: '/SCHEDULE',
      name: 'SCHEDULE',
      component: SCHEDULE
    }, {
      path: '/VIDEOS',
      name: 'VIDEOS',
      component: VIDEOS
    }, {
      path: '/ABOUT',
      name: 'ABOUT',
      component: ABOUT
    },
  ]
})
