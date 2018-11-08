import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/container/Main'
import Work from '@/views/Work'
import About from '@/views/About'
import Contact from '@/views/Contact'

import Nals from '@/views/Works/Nals'
import Timelog from '@/views/Works/Timelog'
import Reformat from '@/views/Works/Reformat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Work'
      },
      component: Main,
      children: [
        {
          path: '/',
          name: 'Work',
          component: Work
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: '/nals',
          name: 'NALS',
          component: Nals
        },
        {
          path: '/Timelog',
          name: 'Timelog',
          component: Timelog
        },
        {
          path: '/Reformat',
          name: 'Reformat',
          component: Reformat
        }
      ]
    }
  ]
})
