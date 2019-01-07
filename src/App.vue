<template>
  <div id="app">

    <!-- Menu collapse -->
    <div v-bind:class="{ open: isOpen }" class="navbar-expanded" v-if="$mq === 'mobile' || $mq === 'tablet'">
			<ul class="menu-expanded">
					<li class="menu-list-expanded"><a class="menu-item-expanded" href="#">Discover</a></li>
					<li class="menu-list-expanded"><a class="menu-item-expanded" href="#">Genres</a></li>
					<li class="menu-list-expanded"><a class="menu-item-expanded" href="#">Companies</a></li>
			</ul>			
		</div>

    <!-- Navbar -->
    <div class="header">
			<router-link to="/"><a class="logo" href="#" v-if="$mq === 'mobile' || $mq === 'tablet'">Tokoflix</a></router-link>
      <router-link to="/"><a class="logoBig" href="#" v-if="$mq === 'desktop'">Tokoflix</a></router-link>
			<nav class="navbar">
				<ul class="menu" v-if="$mq === 'desktop'">
					<li class="menu-list"><a class="menu-item" href="#">Discover</a></li>
					<li class="menu-list"><a class="menu-item" href="#">Genres</a></li>
					<li class="menu-list"><a class="menu-item" href="#">Companies</a></li>
				</ul>			
			</nav>
        <router-link to="user"><img class="user-icon" :src="images.userIcon"></router-link>
				<a id="drawer" href="#"><img :src="images.drawerImg" v-on:click="showNavbarExpanded" 
        v-if="$mq === 'mobile' || $mq === 'tablet'"></a>
    </div>

    <router-view></router-view>
 
  </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 500,
    tablet: 800,
    desktop: 1200,
  }
})

export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      images:{
        drawerImg: require('./assets/menu-burger.png'),
        userIcon: require('./assets/user.png')
      },
      isOpen: false
    }
  },
  methods:{
    showNavbarExpanded: function(){
      if(this.isOpen === false){
          this.isOpen = true;
      }else{
        this.isOpen = false;
      }
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html, body{
  margin: 0;
}

#app{
  margin-top: 60px; 
}

div, footer, nav{
	box-sizing: border-box;
  margin: 0;
}

.router-link-active{
  text-decoration: none;
}

.header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: .5rem 1rem;
  background-color: #f4f4f4;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-wrap: wrap; 
  z-index: 99;   
}

.logo{
  font-size: 2rem;
  color: #42b549;
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
  text-shadow: 2px 3px 4px #d9d9d9;
}

.logoBig{
  font-size: 2.2rem;
  color: #42b549;
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
  text-shadow: 2px 3px 4px #d9d9d9;
}

.navbar{
  margin-left: 16%;
  padding: 0 1em;
  vertical-align: baseline;
}

.menu{
}

.menu-list {
  list-style: none;
  display: inline;
}

.menu-item{
  color: #606060;
  padding: 1em;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
}

.navbar-expanded {
	width: 100%;
	padding: .8rem 1rem;
  background-color: #f4f4f4;
  position: fixed;
  z-index: 98;
  /* This trasform moves the drawer off canvas. */
  -webkit-transform: translate(0px, -200px);
  transform: translate(0px, -200px);
  /* Optionally, we animate the drawer. */
}

.menu-expanded{
  padding: 0;
  margin: 0;
}

.menu-list-expanded{
	list-style: none;
	margin-bottom: 1rem;
}

.menu-item-expanded{
  font-family: 'Open Sans', sans-serif;
	font-size: 1rem;
	text-decoration: none;
	color: #606060;
  margin-left: .5rem;
}

.open {
  -webkit-transform: translate(0, 0px);
  transform: translate(0, 0px);
}

.drawer{
	width: 50px;
}

#drawer img{
	width: 30px;
  position: absolute;
  top: 10px;
	right: 10px;	
}

.user-icon{
  width: 30px;
  height: 30px;
  position: fixed;
  top: .8rem;
  right: 3.5rem;
}

</style>
