<template>
  <div class="find">
  		<div class="top">
  			<mu-list>
			    <mu-list-item @click="goFriendsCircle" avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/friend-circle.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>朋友圈</mu-list-item-title>
			      <mu-list-item-action v-if="hasNews">
			        <mu-avatar>
			          <img src="../../assets/img/head5.jpg">
		          	<span class="point"></span>
			        </mu-avatar>
			      </mu-list-item-action>
			    </mu-list-item>
			   	<mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/sao.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>扫一扫</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/shark.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>摇一摇</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/look.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>看一看</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/shop.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>搜一搜</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/fujin.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>附近的人</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img class="left-img" src="../../assets/img/piaopiu.png">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>漂流瓶</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
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
			    </mu-list-item>
			    
			    
			    
			  </mu-list>
  		</div>
  </div>
</template>

<script>

export default {
  name: 'find',
  data () {
    return {
    	hasNews:true
    }
  },
	methods: {
		//获取1-6的随机数
		getRanderNum(){
  		return Math.ceil(Math.random()*6); 
  	},
  	goFriendsCircle(){
  		this.$router.push({path:'/FriendsCircle'});
  	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.find{
	/*background: #fff;*/
	padding: 5px 0;
	.mu-sub-header{
		border-bottom: 1px solid #eee;
		line-height: 30px;
	} 
	.mu-list>li{
		background: #fff;
		.mu-avatar{
			background-color: transparent;
			position:relative;
			.point{
				display:inline-block;
				width: 8px;
				height: 8px;
				background: red;
				border-radius: 50%;
				position: absolute;
				top: -4px;
				right: -4px;
			}
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
