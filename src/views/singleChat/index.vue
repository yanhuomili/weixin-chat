<template>
  <div class="single-chat">
  	<div class="chat-list">
  			<div class="time-tip">
  				<span>6月29号 晚上18:00</span>
  			</div>
  		<div class="chat-list-item" v-for="(item,index) in groupChatList">
  			<div class="my-text text" v-if="index%2==0">
	  			<img class="person-img" src="../../assets/img/head3.jpg" alt="" />
	  			<p>
	  				<span>{{item}}</span>
	  				<i></i>
	  			</p>
	  		</div>
	  		<div class="other-text text" v-else>
	  			<img class="person-img" src="../../assets/img/head2.jpg" alt="" />
	  			<p>
	  				<span>{{item}}</span>
	  				<i></i>
	  			</p>
	  		</div>
  		</div>
  		
  	</div>
  	
  	<div class="input-wrap row-lr">
  		<img src="../../assets/img/find-default.png" alt="" />
  		<mu-text-field @focus="getFoucs" ref="inputRef" v-model="inputText"></mu-text-field>
  		<img src="../../assets/img/find-default.png" alt="" />
			<p @click="websocketsend" v-if="inputText" class="send">发送</p>
			<img v-else src="../../assets/img/find-default.png" alt="" />
  	</div>
  		
  		
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'single-chat',
  data () {
    return {
    	inputText:'',
    	chatArr:[1,2,3,4,5,6,7,8,9],
    	websocket:null
    	
    }
  },
  mounted(){
  	this.scrollHandle();
  	let that=this;
  	window.onresize = function(){
  		that.$store.commit('getRouterViewH');
  		that.scrollHandle();
		}	
		this.$route.meta.title='默默';
		this.initKeyDonwHandle();//按回车键发送消息
		
  },
  computed:{
  	groupChatList(){
   		this.afterSend();
 			this.scrollHandle();
 			return store.state.chat.groupChatList;
 		}
  },
	methods: {
		//获取1-6的随机数
		getRanderNum(){
  		return Math.ceil(Math.random()*6); 
  	},
  	afterSend(){
  		this.inputText="";
  		var box=document.getElementsByClassName('chat-list')[0];
  		var ipt=document.getElementsByTagName('input')[0];
  		if(box&&ipt){
  			ipt.focus();//发送消息后设置为获取焦点
  		}
  	},
  	scrollHandle(){
  		let box=document.getElementsByClassName('chat-list')[0];
  		if(box){
  			let scrollH=box.scrollHeight;//盒子高度
	  		let scrollT=box.scrollTop;//盒子卷起的高度
	  		let boxH=box.offsetHeight;//内容总共的高度
				this.$nextTick(()=>{
					box.scrollTop=scrollH;
				})
  		}
  	},
  	getFoucs(){
    		this.scrollHandle();
  	},
		websocketsend(){
			this.$socket.send(this.inputText);
		},
		//监听键盘事件
		initKeyDonwHandle(){
			document.addEventListener('keydown',this.enterHandle)
		},
		//销毁键盘事件
		destroyKeyDownHandle(){
			document.removeEventListener('keydown',this.enterHandle);
		},
		enterHandle(e){
			if(e.keyCode==13){
				this.websocketsend();
			}
		},
	},
	beforeDestroy(){
		this.destroyKeyDownHandle();
		
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.single-chat{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	.chat-list{
		height: calc(100% - 48px);
		overflow-y: auto;
		padding: 10px;
	}
	.time-tip{
		text-align: center;
		margin: 8px 0;
		span{
			padding: 5px;
			background: #ddd;
			color: #fff;
		}
		
	}
	.text{
		width: 100%;
		margin-bottom: 15px;
		align-items: flex-start;
		overflow: hidden;
		p{
			max-width: 70%;
			padding: 10px;
			border-radius: 10px;
			position: relative;
			border: 1px solid #eee;
			i{
				display: inline-block;
				width: 0;
				height: 0;
				border: 5px solid #90caf9;
				position: absolute;
				top: 15px;
				right: -5px;
				transform: rotateZ(45deg);
			}
		}
		.person-img{
			margin-left: 10px;
			width: 50px;
			height: 50px;
		}
	}
	.my-text{
		p{
			float: right;
			background: #90caf9;
			i{
				border-color: #90caf9;
				right: -5px;
			}
		}
		.person-img{
			float: right;
			margin-left: 10px;
		}
	}
	.other-text{
		p{
			float: left;
			background: #fff;
			i{
				border-color: #fff;
				left: -5px;
			}
		}
		.person-img{
			float: left;
			margin-right: 10px;
		}
	}
	.input-wrap{
		width: 100%;
		position: fixed;
		background: #f1f1f1;
		bottom: 0;
		left: 0;
		padding: 0 10px;
		box-sizing: border-box;
		align-items: flex-end;
		z-index: 999;
		.mu-input {
			margin: 0;
			padding-bottom: 0;
		}
		p{
			width: 50px;
			height: 30px;
			margin-bottom: 9px;
			line-height: 30px;
			text-align: center;
			background: #90caf9;
			border-radius: 5px;
		}
		img{
			transform: translateY(-10px);
			width: 32px;
			height: 32px;
			margin: 0 5px;
		}
	}
	
}

</style>
