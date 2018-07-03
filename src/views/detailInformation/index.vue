<template>
  <div class="detail-information">
  	
  		<div class="head-img row-lr">
  			<img class="my-img" :src="'../../static/img/head'+getRanderNum()+'.jpg'" alt="" />
  			<div class="info">
  				<p class="name">烟火迷离</p>
  				<p class="signature">微信号：迷离</p>
  				<p class="signature">昵称：烟火</p>
  			</div>
  		</div>
  		<div class="function-list">
  			 <ul>
  			 		<li>
  			 			<div class="title first-title">设置备注和标签</div>
  			 		</li>
  			 		<li class="row-l">
  			 			<div class="title">地区</div>
  			 			<div class="value">广西&nbsp;柳州</div>
  			 		</li>
  			 		<li class="row-l">
  			 			<div class="title">个性签名</div>
  			 			<div class="value">第三方顺丰到付 胜多负少士大夫盛世嫡妃是的士大夫第三方是否士大夫方式盛世嫡妃是的是</div>
  			 		</li>
  			 		<li class="row-l">
  			 			<div class="title">个人相册</div>
  			 			<div class="value imgs row-c">
  			 				<img :src="'../../static/img/head'+getRanderNum()+'.jpg'" alt="" />
  			 				<img :src="'../../static/img/head'+getRanderNum()+'.jpg'" alt="" />
  			 				<img :src="'../../static/img/head'+getRanderNum()+'.jpg'" alt="" />
  			 			</div>
  			 		</li>
  			 		<li v-if="isFriend==true"><div class="title">更多</div></li>
  			 </ul>
  		</div>
  		<div class="buttons">
  			<mu-button v-if="isFriend" full-width color="primary">发消息</mu-button>
  			<mu-button v-if="isFriend" full-width color="#eee" textColor="#333">视频通话</mu-button>
  			<mu-button v-else full-width color="primary">添加到通讯录</mu-button>
  		</div>
  		
  		
  </div>
</template>

<script>

export default {
  name: 'my',
  data () {
    return {
    	isFriend:true,//是否是好友
    }
  },
	methods: {
		//获取1-6的随机数
		getRanderNum(){
  		return Math.ceil(Math.random()*6); 
  	},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.detail-information{
	padding: 5px 0;
	.head-img{
		margin-top: 5px;
		padding:5px 16px;
		background: #fff;
		
		.my-img{
			width: 60px;
			height: 60px;
			margin-right: 10px;
		}
		.info{
			flex: 1;
			padding-right:10px;
			p{
				display: -webkit-box;
			 -webkit-box-orient: vertical;
			 -webkit-line-clamp: 1;
			 overflow: hidden;
			}
			.name{
				font-size: 16px;
			}
			.signature{
				color: #ccc;
			}
		}
		.icon{
			width: 26px;
			height: 26px;
		}
		
	}
	.function-list{
		margin-top: 15px;
		ul{
			background:#fff;
			padding:0 15px ;
		}
		li{
			padding: 15px 0;
			border-bottom: 1px solid #eee;
			&:last-child{
				border-bottom: none;
			}
			.title{
				width: 30%;
				font-size: 15px;
			}
			.first-title{
				width: 50%;
			}
			.value{
				flex: 1;
				display: -webkit-box;
				 -webkit-box-orient: vertical;
				 -webkit-line-clamp: 2;
				 overflow: hidden;
					img{
						max-width: 60px;
						height: auto;
						margin-right:5px;
					}
			}
		}
	}
	.buttons{
		padding: 15px 10% 0;
		.mu-raised-button {
			line-height: 36px;
			font-size: 16px;
		}
		button{
			margin: 10px 0;
		}
	}
	
}
</style>
