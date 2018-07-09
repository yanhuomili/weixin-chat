const chat={
	state:{
		groupChatList:[1,2,3,4,5,6,7,8,9],
	},
	mutations:{
		groupChatReceive(state,text){
			state.groupChatList.push(text);
			console.log(state.groupChatList)
		}
	},
	actions:{//异步方法
		
	}
}



export default chat