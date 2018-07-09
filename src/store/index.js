import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import users from './modules/users'
import chat from './modules/chat'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		userInfo:{
			name:'lihaohua',
			age:27
		},
		hasTabBar:true,
		footBarHeight:51,
		appH:'100%',
		activeTab:'/home',
		direction:''
	},
	mutations:{
		getUserInfo(state){
			return 'huahua';
		},
		UPDATE_DIRECTION(state,obj){
			state.direction=obj.direction;
		},
		getRouterViewH(state){
			let clientH=document.documentElement.clientHeight;
			let routerViewH=clientH-56-state.footBarHeight;
			state.appH=routerViewH;//设置router-view的高度
			return routerViewH;
		}
	},
	actions:{//异步方法
		
	},
	modules: {
	  	login,
	  	users,
	  	chat
	}
})

export default store