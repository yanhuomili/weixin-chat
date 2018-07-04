<template>
  <div class="friends-circle" ref="box">
	  	<mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
	  		<div class="theme">
	  				<div class="user row-r">
	  					<div class="name">烟火</div>
	  					<img src="../../assets/img/head3.jpg" alt="" />
	  				</div>
	  		</div>
	  		<div class="someone-say-list">
	  			<div class="someone-say-item row-lr"  v-for="i in num">
	  				<img class="user-img" src="../../assets/img/head2.jpg" alt="" />
	  				<div class="right">
	  					<div class="user-name">默默</div>
	  					<div class="say-some">
	  						<p class="text">sdf电风扇胜多负少士大夫防守打法电风扇反倒是方式佛挡杀佛东方闪电是的东方闪电是士大夫胜多负少是的是的第三方是</p>
	  					</div>
	  					<div class="someInfo row-lr">
	  						<div class="time">3分钟前</div>
	  						<div class="comment-icon"><img src="../../assets/img/message-default.png"/></div>
	  					</div>
	  					<div class="zan">
	  						<ol>
	  							<li>点赞的人，某人点赞，某人点赞，某人点赞，某人点赞，某人点赞</li>
	  						</ol>
	  					</div>
	  					<div class="comment">
	  						<ul>
	  							<li><span class="comment-user">默默</span>：觉得你很赞</li>
	  							<li><span class="comment-user">默默</span>回复<span class="comment-user">默默</span>：觉得你很赞</li>
	  						</ul>
	  					</div>
	  				</div>
	  			</div>
	  			
	  		</div>
	    </mu-load-more>
	    
	    
	    
	    
  		<!--<div class="theme">
  				<div class="user row-r">
  					<div class="name">烟火</div>
  					<img src="../../assets/img/head3.jpg" alt="" />
  				</div>
  		</div>
  		<div class="someone-say-list">
  			<div class="someone-say-item row-lr" v-for="item in asyList">
  				<img class="user-img" src="../../assets/img/head2.jpg" alt="" />
  				<div class="right">
  					<div class="user-name">默默</div>
  					<div class="say-some">
  						<p class="text">sdf电风扇胜多负少士大夫防守打法电风扇反倒是方式佛挡杀佛东方闪电是的东方闪电是士大夫胜多负少是的是的第三方是</p>
  					</div>
  					<div class="someInfo row-lr">
  						<div class="time">3分钟前</div>
  						<div class="comment-icon"><img src="../../assets/img/message-default.png"/></div>
  					</div>
  					<div class="zan">
  						<ol>
  							<li>点赞的人，某人点赞，某人点赞，某人点赞，某人点赞，某人点赞</li>
  						</ol>
  					</div>
  					<div class="comment">
  						<ul>
  							<li><span class="comment-user">默默</span>：觉得你很赞</li>
  							<li><span class="comment-user">默默</span>回复<span class="comment-user">默默</span>：觉得你很赞</li>
  						</ul>
  					</div>
  				</div>
  			</div>
  		</div>-->
  	
  		
  		</div>
  </div>
</template>

<script>

export default {
  name: 'find',
  data () {
    return {
    	hasNews:true,
    	asyList:[1,2,3,4,5,6],
    	num: 5,
      refreshing: false,
      loading: false,
      text: 'List'
    }
  },
	methods: {
		//获取1-6的随机数
		getRanderNum(){
  		return Math.ceil(Math.random()*6); 
  	},
  	refresh () {
      this.refreshing = true;
      this.$refs.box.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === 'List' ? 'Menu' : 'List';
        this.num = 5;
      }, 2000)
    },
    load () {
      this.loading = true;
      console.log(123456)
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000)
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.friends-circle{
	background: #fff;
	.theme{
		width: 100%;
		height: 3rem;
		background: #444;
		margin-bottom: 1rem;
		position: relative;
		.user{
			position: absolute;
			bottom: -.6rem;
			right: .3rem;
			.name{
				font-size: .32rem;
				color: #fff;
			}
			img{
				margin-left: 15px;
				width: 2rem;
				height: 2rem;
			}
		}
		
	}
	.someone-say-list{
		/*padding:0 .2rem;*/
		.someone-say-item{
			align-items: flex-start;
			padding: .2rem;
			border-bottom: 1px solid #eee;
		}
		.user-img{
			width: 1rem;
			height: 1rem;
			margin-right: .3rem;
		}
		.right{
			.say-some{
				margin: .1rem 0;
			}
			.someInfo{
				margin: .1rem;
				img{
					width: .4rem;
					height: .4rem;
				}
			}
			ol{
				li{
					display: inline-block;
				}
			}
			.zan{
				background: #f1f1f1;
				padding: .1rem;
			}
			.comment{
				border-top: 1px solid #ddd;
				background: #eee;
				padding: .1rem;
				li{
					margin-bottom: .06rem;
				}
				.comment-user{
					color: deepskyblue;
				}
			}
		}
	}
	
	
	
}
</style>
