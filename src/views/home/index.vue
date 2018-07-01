<template>
  <div class="home">
  	<mu-appbar style="width: 100%;" color="primary">
		  <mu-button icon slot="left">
		    <mu-icon value="menu"></mu-icon>
		  </mu-button>
		  home
		  <mu-menu slot="right">
		    <mu-button flat>MENU</mu-button>
		    <mu-list slot="content">
		      <mu-list-item button>
		        <mu-list-item-content>
		          <mu-list-item-title>home1</mu-list-item-title>
		        </mu-list-item-content>
		      </mu-list-item>
		      <mu-list-item button>
		        <mu-list-item-content>
		          <mu-list-item-title>home2</mu-list-item-title>
		        </mu-list-item-content>
		      </mu-list-item>
		    </mu-list>
		  </mu-menu>
		</mu-appbar>
		<router-link to="/test">跳转到test页面</router-link>
		
		  <mu-flex justify-content="center">
		    <mu-button @click="openScrollDialog">Open Scroll Dialog</mu-button>
		  </mu-flex>
		  <mu-dialog title="Phone Ringtone" width="360" scrollable :open.sync="openScroll">
		    <mu-list>
		      <mu-list-item :key="option" v-for="option in options">
		        <mu-list-item-content>
		          <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
		        </mu-list-item-content>
		      </mu-list-item>
		    </mu-list>
		    <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>
		  </mu-dialog>
		<mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
		    <mu-tab>home 1</mu-tab>
		    <mu-tab>home 2</mu-tab>
		    <mu-tab>home 3</mu-tab>
		  </mu-tabs>
		  <div class="demo-text" v-if="active1 === 0">
		    <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
		  </div>
		  <div class="demo-text" v-if="active1 === 1">
		    <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
		    <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
		    <p>“那么就去地狱找到你，我绝对不逃！”</p>
		    <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
		  </div>
		  <div class="demo-text" v-if="active1 === 2">
		    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
		    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
		    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
		    <p>“也许吧，未来……给你了。”</p>
		  </div>
		<mu-paper :z-depth="1" class="demo-loadmore-wrap">
		  <mu-appbar color="teal">
		    <mu-button icon slot="left">
		      <mu-icon value="menu"></mu-icon>
		    </mu-button>
		    LoadMore
		    <mu-button icon slot="right" @click="refresh()">
		      <mu-icon value="refresh"></mu-icon>
		    </mu-button>
		  </mu-appbar>
		  <mu-container ref="container" class="demo-loadmore-content">
		    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
		      <mu-list>
		        <template v-for="i in num">
		          <mu-list-item>
		            <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
		          </mu-list-item>
		          <mu-divider />
		        </template>
		      </mu-list>
		    </mu-load-more>
		  </mu-container>
		</mu-paper>
		
		<!--<mu-container style="max-width: 400px; width:100%;">-->
		  <mu-bottom-nav :value.sync="shift" shift>
		    <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
		    <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
		    <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
		    <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
		  </mu-bottom-nav>
		<!--</mu-container>-->
		
		<mu-container>
		  <mu-row gutter>
		    <mu-col span="12" lg="4" sm="6">
		      <mu-date-input   v-model="value4" label="popover 显示" label-float full-width></mu-date-input>
		    </mu-col>
		    <mu-col span="12" lg="4" sm="6">
		      <mu-date-input   v-model="value5" label="对话框显示" container="dialog" label-float full-width></mu-date-input>
		    </mu-col>
		    <mu-col span="12" lg="4" sm="6">
		      <mu-date-input   v-model="value6" label="底部弹出显示" container="bottomSheet" label-float full-width></mu-date-input>
		    </mu-col>
		  </mu-row>
		</mu-container>
		
		
		
  </div>
</template>

<script>

export default {
  name: 'home',
  components:{
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      shift: 'movies',
      openScroll: false,
      ringtone: 'None',
      options: [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel'
	    ],
	    date3: undefined,
	    active1: 0,
	    num: 10,
      refreshing: false,
      loading: false,
      text: 'List',
      value4: undefined,
      value5: undefined,
      value6: undefined
    }
  },
  mounted(){
  	console.log(this);
  },
methods: {
    openScrollDialog () {
      this.openScroll = true;
    },
    closeScrollDialog () {
      this.openScroll = false;
    },
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === 'List' ? 'Menu' : 'List';
        this.num = 10;
      }, 2000)
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000)
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-date-picker {
  margin: 8px;
}.demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.mu-inverse{
	width: 100%;
}
</style>
