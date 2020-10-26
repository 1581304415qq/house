<template>
    <div class='home'>
        <div class="ad">
            <div>
                <img :src='adImgs[currentIndex]'/>
            </div>
            <div class="page" v-if="this.adImgs.length > 1">
                <ul>
                  <li @click="gotoPage(prevIndex)">&lt;</li>
                  <li v-for="(item,index) in adImgs" @click="gotoPage(index)" :class="{'current':currentIndex == index}">  {{index+1}}</li>
                  <li @click="gotoPage(nextIndex)">&gt;</li>
                </ul>
            </div>
        </div>
        <div class="home_menu">
            <el-button id="consult_button" type="primary" @click='navigateTo(0)'>房价查询</el-button>
        </div>
    </div>
</template>

<script>
    import consultPage from './consult.vue'
    const imgsrc = require('../assets/logo.png')
    export default {
    	data(){
            return{
                currentIndex:0,
                adImgs:[imgsrc,imgsrc,imgsrc]
            }
        },
        created(){
           
        },
        mounted(){
            // this.runInv()
        },
        computed: {
            prevIndex(){
                return this.currentIndex>0?this.currentIndex-1:0;
            },
            nextIndex(){
                return this.currentIndex>=this.adImgs.length-1?0:this.currentIndex+1;
            }
        },
        components:{
            consultPage
        },
        methods: {
            runInv() {
              this.timer = setInterval(() => {
                this.gotoPage(this.nextIndex)
              }, 1000)
            },
            gotoPage:function(e){
                this.currentIndex=e
                console.log(e)
            },
            navigateTo:function(e){
                this.$router.push('/consult')
            }
        },
    }
</script>

<style>
   .home{
        position: absolute;
        height: 100%;
        width: 100%;
   }
   #consult_button{
        background-color:#cf4233;
   }
   .ad{
        height:6rem;
   }
   .home_menu{
        padding:1rem;
        height:10rem;
   }
</style>
