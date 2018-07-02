import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import users from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		userInfo:{
			name:'lihaohua',
			age:27
		},
		hasTabBar:true,
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
	},
	actions:{//异步方法
		
	},
	modules: {
	  	login,
	  	users
	}
})

export default store