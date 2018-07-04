<template>
  <div class="my">
  		<div class="head-img row-c">
  			<img class="my-img" src="../../assets/img/head5.jpg" alt="" />
  			<div class="info">
  				<p class="name">验货迷离</p>
  				<p class="signature">微信号：烟火</p>
  			</div>
  			<img class="icon" src="../../assets/img/erweima.png"/>
  		</div>
  		
  		<div class="top">
  			<mu-list>
			    <!--<mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/friend-circle.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>朋友圈</mu-list-item-title>
			      <mu-list-item-action>
			        <mu-avatar>
			          <img src="../../assets/img/head4.jpg">
			        </mu-avatar>
			        <div v-if="unReadNew" class="tip-point"></div>
			      </mu-list-item-action>
			    </mu-list-item>-->
			   	<mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/sao.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>钱包</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/shark.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>收藏</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/look.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>相册</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/shop.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>卡包</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/fujin.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>表情</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/piaopiu.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>设置</mu-list-item-title>
			    </mu-list-item>
			    <!--<mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/shop.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>购物</mu-list-item-title>
			    </mu-list-item>
			    	<mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/game.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>游戏</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/xiaochengxu.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>小程序</mu-list-item-title>
			    </mu-list-item>-->
			    
			    
			    
			  </mu-list>
  		</div>
  </div>
</template>

<script>

export default {
  name: 'my',
  data () {
    return {
    	unReadNew:true
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
.my{
	/*background: #fff;*/
	padding: 5px 0;
	.head-img{
		overflow: hidden;
		padding:5px 16px;
		.my-img{
			/*float: left;*/
			width: 60px;
			height: 60px;
			margin-right: 10px;
		}
		.info{
			width: 65%;
			/*margin-top: 6px;*/
			padding-right:10px;
			/*float: left;*/
			p{
				display: -webkit-box;
			 -webkit-box-orient: vertical;
			 -webkit-line-clamp: 1;
			 overflow: hidden;
			}
			.name{
				font-size: 16px;
				margin-bottom: 5px;
			}
		}
		.icon{
			/*float: right;*/
			/*margin-top: 17px;*/
			width: 26px;
			height: 26px;
		}
		
	}
	.mu-item-action{
		position: relative;
		.tip-point{
				width: 10px;
				height: 10px;
				background: #ff1744;
				position: absolute;
				top: 5px;
				right: -5px;
				border-radius: 50%;
			}
	}
	
	.mu-sub-header{
		border-bottom: 1px solid #eee;
		line-height: 30px;
	} 
	.mu-list>li{
		background: #fff;
		.mu-avatar{
			background-color: transparent;
			.left-img{
				max-width: 28px;
				height: auto;
			}
		}
		&:nth-of-type(odd){
			margin-bottom: 15px;
		}
		&:nth-of-type(even){
			border-bottom: 1px solid #eee;
		}
		&:last-child{
			margin-bottom: 0 !important;
			border-bottom: none;
		}
	}
	.right-tip{
		height: 45px;
	}
	.mu-avatar img{
		border-radius: 0;
	}
	
}
</style>
