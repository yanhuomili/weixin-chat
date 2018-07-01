// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
//import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
//import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
Vue.use(MuseUI);

//是否显示tabbar
router.afterEach((to,from)=>{
	let arr=['/','/home','/mailList','/find','/my'];
	
	console.log(store.state.userInfo.name)
	console.log(store.state.login.loginInfo.name)
	console.log(store.state.users.userInfo.name)
	
	
	store.commit('getUserInfo');
	store.state.activeTab=to.path;
	if(arr.indexOf(to.path)<0){
		store.state.hasTabBar=false;
	}else{
		store.state.hasTabBar=true;
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
