<template>
  <div class="nav-bar">
  	<mu-appbar style="width: 100%;" color="primary">
		  <mu-button icon slot="left" @click="goBack">
		    <mu-icon value="arrow_back"></mu-icon>
		  </mu-button>
		  {{$route.meta.title}}
		  <mu-menu slot="right" :open.sync="open">
		    <mu-button flat>MENU</mu-button>
		    <mu-list slot="content">
		      <mu-list-item button @click="menuClick(index)" v-for="(item,index) in 5" :key="index">
		        <mu-list-item-content>
		          <mu-list-item-title>Menu Item {{index}}</mu-list-item-title>
		        </mu-list-item-content>
		      </mu-list-item>
		    </mu-list>
		  </mu-menu>
		</mu-appbar>
  </div>
</template>

<script>

export default {
  name: 'nav-bar',
  data () {
    return {
      open:false,
    }
  },
  computed:{
  },
	methods: {
		menuClick(val){
			console.log(val)
			this.open=false;
		},
		goBack(){
			this.$router.go(-1);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-bar{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
}
.mu-appbar-title{
	font-size: 17px;
}
.mu-button-wrapper{
	font-size: 14px;
}
</style>
<style type="text/css">
</style>
