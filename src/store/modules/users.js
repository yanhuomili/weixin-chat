const users={
	state:{
		userInfo:{
			name:'haohao',
			age:25
		},
		hasTabBar:false,
	},
	mutations:{
		getUserInfo(state){
			console.log(state.userInfo.age)
			return 'lili';
		}
	},
	actions:{//异步方法
		
	}
}



export default users