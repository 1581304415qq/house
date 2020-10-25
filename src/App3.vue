<template>
  <div id="app">
    <home-page v-if='isHome'/>
    <user-page v-else/>
    <div class="tab_view">
    <div class='view_item' @click="goto('/home')">主页</div>
    <div class='view_item' @click="goto('/user')">用户</div>
    </div>
  </div>
</template>

<script>
import homePage from "./pages/home.vue";
import userPage from "./pages/user.vue";
export default {
  name: 'app',
  data () {
    return {
      isHome:true,
    }
  },
  methods:{
    goto:function(e){
      if (e==='/home') this.isHome=true
      else if (e==='/user') this.isHome=false
    }
  },
  components:{
    homePage,
    userPage,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab_view{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center; 
}
.view_item{
  flex-grow: 1;
}
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
</style>
