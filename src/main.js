// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import socket from '@/connectSocket'//引进websocket

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
//import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
//import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
Vue.use(MuseUI);

const history = window.sessionStorage;
history.clear()
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);

//是否显示tabbar
router.afterEach((to,from)=>{
	let arr=['/','/home','/mailList','/find','/my'];
	store.commit('getUserInfo');
	store.state.activeTab=to.path;
	if(arr.indexOf(to.path)<0){
		store.state.hasTabBar=false;
		store.state.footBarHeight=0;
	}else{
		store.state.hasTabBar=true;
		store.state.footBarHeight=51;
	}
	store.commit('getRouterViewH');//每次切换路由都需要重新计算router-view的高度
	
	//页面切换动态效果设置
	const toIndex = history.getItem(to.path);
	  const fromIndex = history.getItem(from.path);
	
	  if (toIndex) {
	    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
	      store.commit('UPDATE_DIRECTION', {direction: 'vux-pop-in'})
	    } else {
	      store.commit('UPDATE_DIRECTION', {direction: 'vux-pop-out'})
	    }
	  } else {
	    ++historyCount;
	    history.setItem('count', historyCount);
	    to.path !== '/' && history.setItem(to.path, historyCount);
	    store.commit('UPDATE_DIRECTION', {direction: 'vux-pop-in'})
	  }
	  if(arr.indexOf(to.path)>-1){
	  	if(arr.indexOf(from.path)>-1){
	  		store.commit('UPDATE_DIRECTION', {direction: 'fade'});
	  	}else{
	  		store.commit('UPDATE_DIRECTION', {direction: 'vux-pop-out'});
	  	}
	  }
	
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
