import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/views/home/index.vue"; //首页
import MailList from "@/views/mailList/index.vue"; //通讯录
import Find from "@/views/find/index.vue"; //发现
import My from "@/views/my/index.vue"; //我的
import DetailInformation from "@/views/detailInformation/index.vue"; //朋友详细资料
import SingleChat from "@/views/singleChat/index.vue"; //聊天页面
import GroupChat from "@/views/groupChat/index.vue"; //聊天页面
import FriendsCircle from "@/views/friendsCircle/index.vue"; //朋友圈页面
import Test from "@/views/test/index.vue";
import DouYin from "@/views/douyin/index.vue"; //抖音页面

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/douyin",
      name: "douyin",
      component: DouYin,
      meta: {
        title: "抖音"
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/",
      redirect: "/home",
      meta: {
        title: "首页"
      }
    },
    {
      path: "/MailList",
      name: "mailList",
      component: MailList,
      meta: {
        title: "通讯录"
      }
    },
    {
      path: "/Find",
      name: "find",
      component: Find,
      meta: {
        title: "发现"
      }
    },
    {
      path: "/My",
      name: "my",
      component: My,
      meta: {
        title: "我的"
      }
    },
    {
      path: "/DetailInformation",
      name: "detailInformation",
      component: DetailInformation,
      meta: {
        title: "详细资料"
      }
    },
    {
      path: "/SingleChat",
      name: "single-chat",
      component: SingleChat,
      meta: {
        title: "用户"
      }
    },
    {
      path: "/GroupChat",
      name: "group-chat",
      component: GroupChat,
      meta: {
        title: "群聊"
      }
    },
    {
      path: "/FriendsCircle",
      name: "friends-circle",
      component: FriendsCircle,
      meta: {
        title: "朋友圈"
      }
    },
    {
      path: "/Test",
      name: "test",
      component: Test
    }
  ]
});
