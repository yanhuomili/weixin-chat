const login={
	state:{
		loginInfo:{
			name:'huahua',
			age:26
		},
		hasTabBar:false,
	},
	mutations:{
		getUserInfo(state){
			console.log(state.loginInfo.age)
			return 'haohao';
		}
	},
	actions:{//异步方法
		
	}
}



export default login