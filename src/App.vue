<template>
  <div id="app" :class="{'app-wrap-active':show==true}">
  	<nav-bar ref="navBarRef"></nav-bar>
  	<div class="router-view" :style="{height: routerViewH+'px'}">
  		<transition :name="direction">
	  	  	<router-view/>
	    </transition>
  	</div>
    <foot-bar v-if="show" ref="footBarRef"></foot-bar>
  </div>
</template>

<script>
import footBar from './components/footBar';
import navBar from './components/navBar';
import store from './store'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components:{
  	footBar,
  	navBar
  },
  mounted(){
  	console.log(this.routerViewH)
  },
  computed:{
  	//是否显示底部tab
  	show(){
  		return store.state.hasTabBar;
  	},
  	//动态设置router-view的高度
  	routerViewH(){
  		let H=document.documentElement.clientHeight;
  		return H-store.state.footBarHeight-56;
  	},
  	...mapState({
    	direction:'direction'
  	})
  },
  watch:{
  	 $route(to,from){
		    console.log('change');
		  }
  }
}
</script>

<style>
@import './assets/css/style.css';
#app {
	width: 100%;
	overflow-x: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	padding-top: 56px;
	overflow: hidden;
}
.router-view{
	overflow-x:hidden ;
	overflow-y: auto;
}
.app-wrap-active{
	padding-bottom:50px ;
}

.vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 250ms;
    height: 100%;
    position: absolute;
    top: 0;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
