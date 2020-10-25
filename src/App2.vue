<template>
  <div id="app">
    <div class="dask_top">
      <div class="my_tasks" @click='select(0)'>我的任务</div>
      <div class="dispense_task" @click='select(1)'>分配任务</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import myTasks from './pages/myTasks'
import dispenseTask from './pages/dispenseTask'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods:{
    select:function(e){
      console.log(e)
      if (e===0) {
        this.$router.push('home')
      }else{
        this.$router.push('login')
      }
    },
  },
  components:{
    myTasks,
    dispenseTask
  }
}
</script>
<style scoped>
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  .dask_top{
    display:flex;
    height:80px;
    margin-top:30px;
    justify-content:space-between;
    align-items:stretch;
  }
  .my_tasks,
  .dispense_task{
    cursor:pointer;
    flex-grow:1;
  }
  .select_style{
    border-bottom: 1px solid #000;
    box-shadow:inset 0px -5px 5px black;
  }
</style>
