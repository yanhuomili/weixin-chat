<template>
  <div class="single-chat">
  	<div class="chat-list">
  			<div class="time-tip">
  				<span>6月29号 晚上18:00</span>
  			</div>
  		<div class="chat-list-item" v-for="(item,index) in chatArr">
  			<div class="my-text row-r text" v-if="index%2==0">
	  			<p>
	  				<span>{{item}}</span>
	  				<i></i>
	  			</p>
	  			<img class="person-img" :src="'../../static/img/head'+getRanderNum()+'.jpg'" alt="" />
	  		</div>
	  		<div class="other-text row-l text" v-else>
	  			<img class="person-img" :src="'../../static/img/head'+getRanderNum()+'.jpg'" alt="" />
	  			<p>
	  				<span>{{item}}</span>
	  				<i></i>
	  			</p>
	  		</div>
  		</div>
  		
  	</div>
  	
  	<div class="input-wrap row-lr">
  		<img src="../../assets/img/find-default.png" alt="" />
  		<mu-text-field v-model="inputText"></mu-text-field>
  		<img src="../../assets/img/find-default.png" alt="" />
			<p @click="send" v-if="inputText" class="send">发送</p>
			<img v-else src="../../assets/img/find-default.png" alt="" />
  	</div>
  		
  		
  </div>
</template>

<script>

export default {
  name: 'single-chat',
  data () {
    return {
    	inputText:'',
    	chatArr:[1,2,3,4,5,6,7,8,9]
    	
    }
  },
  mounted(){
  	this.scrollHandle();
  },
	methods: {
		//获取1-6的随机数
		getRanderNum(){
  		return Math.ceil(Math.random()*6); 
  	},
  	send(){
  		this.chatArr.push(this.inputText);
  		this.inputText="";
  		this.scrollHandle();
  	},
  	scrollHandle(){
  		let box=document.getElementsByClassName('single-chat')[0];
  		let scrollH=box.scrollHeight;//盒子高度
  		let scrollT=box.scrollTop;//盒子卷起的高度
  		let boxH=box.offsetHeight;//内容总共的高度
			this.$nextTick(()=>{
				box.scrollTop=boxH;
			})
  	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.single-chat{
	width: 100%;
	height: calc(100vh - 104px);
	overflow-y: auto;
	.chat-list{
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
			background: #90caf9;
			i{
				border-color: #90caf9;
				right: -5px;
			}
		}
		.person-img{
			margin-left: 10px;
		}
	}
	.other-text{
		p{
			background: #fff;
			i{
				border-color: #fff;
				left: -5px;
			}
		}
		.person-img{
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
