<template>
  <div class="foot-bar">
  	<ul class="foot-bar-menu row-lr">
  		<li class="col-c" :class="{'active':activeIndex=='/home'||activeIndex=='/'}" @click="barClick('/home')">
  			<span class="menu-icon">
  				<i>
	  				<mu-badge content="12" circle color="red400"  class="demo-icon-badge"></mu-badge>
	  			</i>
	  				<img v-if="activeIndex=='/home'" src="../assets/img/message-active.png"/>
	  				<img v-else src="../assets/img/message-default.png"/>
  			</span>
  			<span>微信</span>
  		</li>
  		<li class="col-c" :class="{'active':activeIndex=='/mailList'}" @click="barClick('/mailList')">
  			<span class="menu-icon">
  				<i>
	  				<mu-badge content="12" circle color="red400"  class="demo-icon-badge"></mu-badge>
	  			</i>
	  				<img v-if="activeIndex=='/mailList'" src="../assets/img/users-active.png"/>
	  				<img v-else src="../assets/img/users-default.png"/>
  			</span>
  			<span>通讯录</span>
  		</li>
  		<li class="col-c" :class="{'active':activeIndex=='/find'}" @click="barClick('/find')">
  			<span class="menu-icon">
  				<i>
	  				<mu-badge content="12" circle color="red400"  class="demo-icon-badge"></mu-badge>
	  			</i>
	  				<img v-if="activeIndex=='/find'" src="../assets/img/find-active.png"/>
	  				<img v-else src="../assets/img/find-default.png"/>
  			</span>
  			<span>发现</span>
  		</li>
  		<li class="col-c" :class="{'active':activeIndex=='/my'}" @click="barClick('/my')">
  			<span class="menu-icon">
  				<i>
	  				<mu-badge content="12" circle color="red400"  class="demo-icon-badge"></mu-badge>
	  			</i>
	  				<img v-if="activeIndex=='/my'" src="../assets/img/my-active.png"/>
	  				<img v-else src="../assets/img/my-default.png"/>
  			</span>
  			<span>我的</span>
  		</li>
  	</ul>
  </div>
</template>

<script>

export default {
  name: 'foot-bar',
  data () {
    return {
      
    }
  },
  computed:{
  	activeIndex(){
  		console.log(this.$store.state.activeTab)
  		return this.$store.state.activeTab;
  	}
  },
	methods: {
	    barClick(val){
	    	this.$router.push({path:val})
	    },
	    hiddenSelf(){
	    	document.getElementsByClassName('foot-bar')[0].style.display='none';
	    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.foot-bar{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #f1f1f1;
	z-index: 999;
	border-top: 1px solid #ddd;
	.foot-bar-menu{
		width: 100%;
		height: 50px;
		justify-content: space-around;
		i{
			position: absolute;
			top: -10px;
			right: -8px;
			img{
				max-width: 100%;
				height: auto;
			}
		}
		li .menu-icon{
			position: relative;
			width: 20px;
			height: 20px;
		}
		.active{
			color: dodgerblue;
		}
	}
}


</style>
<style type="text/css">
	.mu-badge-circle{
		width: 16px !important;
		height: 16px !important;
		
	}
</style>
