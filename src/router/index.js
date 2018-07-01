import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/index.vue'
import MailList from '@/views/mailList/index.vue'
import Find from '@/views/find/index.vue'
import My from '@/views/my/index.vue'
import Test from '@/views/test/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/MailList',
      name: 'mailList',
      component: MailList
    },
    {
      path: '/Find',
      name: 'find',
      component: Find
    },
    {
      path: '/My',
      name: 'my',
      component: My
    },
    {
      path: '/Test',
      name: 'test',
      component: Test
    }
    
  ]
})
