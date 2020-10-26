<template>
  <div id="app">
    <footer-a :message='hello' @check='check($event)' :titleName.sync='titleName' v-model='label'></footer-a>
    <p>{{titleName}}</p>
    <p>{{label}}</p>
    <router-link to="/home">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import footer from './components/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      hello:'hello',
      titleName:'foo-ter',
      label:'label'
    }
  },
  methods:{
    check:function(msg){
      // alert('..'+msg)
      this.hello+=msg
    }
  },
  components:{
    'footer-a':footer
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
