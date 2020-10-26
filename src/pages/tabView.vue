<template>
  <div id="tab_view">
    <home-page v-if='currentPage===0'/>
    <user-page v-else/>
    <div class="tab_bar">
    <div :class='getItemStyle(0)' @click="goto('/home')">主页</div>
    <div :class='getItemStyle(1)' @click="goto('/user')">用户</div>
    </div>
  </div>
</template>

<script>
import homePage from "./home.vue";
import userPage from "./user.vue";
export default {
  name: 'tab_view',
  data () {
    return {
      currentPage:0,
      viewItemStyles:['view_item','select'],
    }
  },
  methods:{
    goto:function(e){
      if (e==='/home') this.currentPage=0
      else if (e==='/user') this.currentPage=1
    },
    getItemStyle(e){
      if (e===this.currentPage)return ['view_item','select']
        else return 'view_item'
    }
  },
  computed:{
  },
  components:{
    homePage,
    userPage,
  }
}
</script>

<style>
.tab_bar{
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
  height:100%;
  font-size:.7rem;
}
.select{
  background-color:#cf4233;
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
