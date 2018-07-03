<template>
  <div class="mail-list">
  		<div class="top">
  			<mu-list>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img :src="'../../static/img/head'+getRanderNum()+'.jpg'">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>新的朋友</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img :src="'../../static/img/head'+getRanderNum()+'.jpg'">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>群聊</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img :src="'../../static/img/head'+getRanderNum()+'.jpg'">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>标签</mu-list-item-title>
			    </mu-list-item>
			    <mu-list-item avatar button :ripple="true">
			      <mu-list-item-action>
			        <mu-avatar>
			          <img :src="'../../static/img/head'+getRanderNum()+'.jpg'">
			        </mu-avatar>
			      </mu-list-item-action>
			      <mu-list-item-title>公众号</mu-list-item-title>
			    </mu-list-item>
			  </mu-list>
  		</div>
  		
  		<div class="friends-list">
  			<div class="friends-list-item" v-for="(item,index) in friendsList">
  				<mu-list>
			    	<mu-sub-header>{{item}}</mu-sub-header>
				    <mu-list-item @click="goDetailInformation" avatar button :ripple="true" v-for="(item1,index) in 6" :key="index">
				      <mu-list-item-action>
				        <mu-avatar>
				          <img :src="'../../static/img/head'+getRanderNum()+'.jpg'">
				        </mu-avatar>
				      </mu-list-item-action>
				      <mu-list-item-title>Myron Liu--{{item}}</mu-list-item-title>
				    </mu-list-item>
				  </mu-list>
  			</div>
  		</div>
  		
  		<div class="letter-search">
  			<ul class="col-u">
  				<li @click="lettersClick(item)" v-for="item in letters">{{item}}</li>
  			</ul>
  		</div>
  		
		  
  </div>
</template>

<script>

export default {
  name: 'mailList',
  data () {
    return {
    	friendsList:['A','B','C','D','E','F','G'],
    	letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z']
    }
  },
	methods: {
		//获取1-6的随机数
		getRanderNum(){
  		return Math.ceil(Math.random()*6); 
  	},
  	lettersClick(val){
  		console.log(val);
  	},
  	//查看好友详细资料
  	goDetailInformation(){
  		this.$router.push({path:'/DetailInformation'});
  	},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mail-list{
	/*background: #fff;*/
	.mu-sub-header{
		border-bottom: 1px solid #eee;
		line-height: 30px;
	} 
	.mu-list>li{
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.right-tip{
		height: 45px;
	}
	.mu-avatar img{
		border-radius: 0;
	}
	
	.letter-search{
		overflow-y: auto;
		height: calc(100vh - 106px);
		ul{
			height: 100%;
		}
		padding: 0 10px;
		position: fixed;
		top: 56px;
		right: 10px;
	}
}
</style>
