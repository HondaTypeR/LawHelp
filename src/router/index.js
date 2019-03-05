import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Regin from '@/components/Pages/Regin'
import Login from '@/components/Pages/Login'
import Talk from '@/components/Base/Talk'
import Ask from '@/components/Pages/Ask'
import TalkAbout from '@/components/Pages/TalkAbout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Regin',
      name: 'Regin',
      component: Regin
    },
    {
      path:'/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'/Talk',
      name: 'Talk',
      component: Talk
    },
    {
      path:'/Ask',
      name: 'Ask',
      component: Ask
    },
    {
      path:'/TalkAbout',
      name: 'TalkAbout',
      component: TalkAbout
    }
  ]
})
