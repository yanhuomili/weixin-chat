<template>
  <div class="home">
		<mu-list textline="two-line">
	    <!--<mu-sub-header>Today</mu-sub-header>-->
	    <mu-list-item @click="goSingleChat" avatar button :ripple="true" v-for="(item,index) in 15" :key="index">
	      <mu-list-item-action>
	        <mu-avatar>
	          <img src="../../assets/img/head1.jpg">
	        </mu-avatar>
	      </mu-list-item-action>
	      <mu-list-item-content>
	        <mu-list-item-title>Photos</mu-list-item-title>
	        <mu-list-item-sub-title>Jan 9, 2014 三点前翁二群无切尔奇二恶趣味 </mu-list-item-sub-title>
	      </mu-list-item-content>
	      <!--<mu-list-item-title>Myron Liu--{{item}}</mu-list-item-title>-->
	      <!--<mu-list-item-action>
	        <mu-list-item-after-text>2 hr</mu-list-item-after-text>
	        <mu-list-item-after-text>2 hr</mu-list-item-after-text>
	      </mu-list-item-action>-->
	      
	      <mu-list-item-action>
	        <p class="right-tip col-u">
	        	<span>09:30</span>
	        	<!--<span>123</span>-->
	        	<mu-icon value="info"></mu-icon>
	        </p>
	      </mu-list-item-action>
	    </mu-list-item>
	  </mu-list>
	  
	  
		<mu-button color="primary" @click="getList">获取列表</mu-button>
		<mu-list>
	    <mu-list-item avatar button :ripple="false" v-for="(item,index	) in list" :key="index">
	      <mu-list-item-action>
	        <mu-avatar>
	          <img src="../../assets/img/head2.jpg">
	        </mu-avatar>
	      </mu-list-item-action>
	      <mu-list-item-title>Mike Li</mu-list-item-title>
	      <mu-list-item-action>
	        <mu-icon value="chat_bubble"></mu-icon>
	      </mu-list-item-action>
	    </mu-list-item>
		</mu-list>
		
		
  </div>
</template>

<script>
	import { test } from '@/api'
export default {
  name: 'home',
  components:{
  },
  data () {
    return {
    	list:[]
    }
  },
  computed:{
  	
  },
  mounted(){
  	console.log(mui)
  	test().then((res)=>{
  		console.log(res.data);
  	}).catch((err)=>{
  		console.log(err);
  	})
  },
	methods: {
		//获取1-6的随机数
		getRanderNum(){
	  		return Math.ceil(Math.random()*6); 
	  },
	  //前往聊天叶敏
	  goSingleChat(){
	  	this.$router.push({path:'SingleChat'});
	  },
	  async getList(){
	  	let data=(await test()).data;
	  	this.list=data.data;
	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home{
	background: #fff;
	.mu-sub-header{
		border-bottom: 1px solid #eee;
	} 
	.mu-list>li{
		border-bottom: 1px solid #eee;
	}
	.right-tip{
		height: 45px;
	}
}
	
</style>
