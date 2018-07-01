<template>
  <div id="app" :class="{'app-wrap-active':show==true}">
  	<transition name="fade">
  	  <router-view/>
    </transition>
    <foot-bar v-if="show" ref="footBarRef"></foot-bar>
  </div>
</template>

<script>
import footBar from './components/footBar';
import store from './store'
export default {
  name: 'App',
  components:{
  	footBar
  },
  mounted(){
  },
  computed:{
  	show(){
  		return store.state.hasTabBar;
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
  /*color: #2c3e50;*/
 
}
.app-wrap-active{
	padding-bottom:50px ;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
