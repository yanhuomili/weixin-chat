import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/index.vue'//首页
import MailList from '@/views/mailList/index.vue'//通讯录
import Find from '@/views/find/index.vue'//发现
import My from '@/views/my/index.vue'//我的
import DetailInformation from '@/views/detailInformation/index.vue'//朋友详细资料
import SingleChat from '@/views/singleChat/index.vue'//聊天页面
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
      path: '/DetailInformation',
      name: 'detailInformation',
      component: DetailInformation
    },
    {
      path: '/SingleChat',
      name: 'single-chat',
      component: SingleChat
    },
    {
      path: '/Test',
      name: 'test',
      component: Test
    }
    
  ]
})
