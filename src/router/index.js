import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Regin from '@/components/Pages/Regin'
import Login from '@/components/Pages/Login'
import Talk from '@/components/Base/Talk'
import Ask from '@/components/Pages/Ask'
import Test from '@/components/Pages/Test'
import TalkAbout from '@/components/Pages/TalkAbout'
import Professor from '@/components/Pages/Professor'
import Success from '@/components/Pages/Success'
import Questions from '@/components/Pages/Questions'
import BBC from '@/components/Pages/BBC'
import Prosuccess from '@/components/Pages/Prosuccess'
import MyQuestion from '@/components/Pages/MyQuestion'
import NewsDetail from '@/components/Pages/NewsDetail'
import Me from '@/components/Pages/Me'
import OneToOne from '@/components/Pages/OneToOne'
import Case from '@/components/Pages/Case'
import CaseDetails from '@/components/Pages/CaseDetails'
import SuperAdmin from '@/components/Pages/SuperAdmin'
import SuperAddProfess from '@/components/Pages/SuperAddProfess'
import Pass from '@/components/Pages/Pass'
import NotPass from '@/components/Pages/NotPass'
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
    },
    {
      path:'/Test',
      name: 'Test',
      component: Test
    },
    {
      path:'/Professor',
      name: 'Professor',
      component: Professor
    },
    {
      path:'/Success',
      name: 'Success',
      component: Success
    },
    {
      path:'/Questions',
      name: 'Questions',
      component: Questions
    },
    {
      path:'/BBC',
      name: 'BBC',
      component: BBC
    },
    {
      path:'/Prosuccess',
      name: 'Prosuccess',
      component: Prosuccess
    },
    {
      path:'/MyQuestion',
      name:'MyQuestion',
      component: MyQuestion
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/OneToOne',
      name: 'MOneToOnee',
      component: OneToOne
    },
    {
      path: '/Case',
      name: 'Case',
      component: Case
    },
    {
      path: '/CaseDetails',
      name: 'CaseDetails',
      component: CaseDetails
    },
    {
      path: '/SuperAdmin',
      name: 'SuperAdmin',
      component: SuperAdmin
    },
    {
      path: '/SuperAddProfess',
      name: 'SuperAddProfess',
      component: SuperAddProfess
    },
    {
      path: '/Pass',
      name: 'Pass',
      component: Pass
    },
    {
      path: '/NotPass',
      name: 'NotPass',
      component: NotPass
    },
  ]
})
