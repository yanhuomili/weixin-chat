import Vue from 'vue';

const websocket = new WebSocket(process.env.WS_API);
websocket.onopen = websocketonopen;//链接socket
websocket.onerror = websocketonerror;//监听错误事件
websocket.onmessage = websocketonmessage; //监听接收消息
websocket.onclose = websocketclose;//监听关闭事件

Vue.prototype.$socket=websocket;


export function websocketonopen(){
		console.log('链接服务')
	}
export  function websocketonerror(err){
		console.log('服务发生错误')
		mui.toast('服务已中断');
	}
export function websocketonmessage(e){
		console.log('主程序接收到消息')
	}
export  function websocketclose(e){
		console.log('关闭链接')
	}

export default websocket;