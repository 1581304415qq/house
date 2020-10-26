<template>
    <div class='home'>
        <div class="ad" @mouseover='clearTimer' @mouseout='runInv'>
            <div class="adImg">
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
                adImgs:['http://127.0.0.1:8090/image/1.jpg',
                'http://127.0.0.1:8090/image/2.jpg',
                'http://127.0.0.1:8090/image/3.jpg']
            }
        },
        created(){
           
        },
        mounted(){
            this.runInv()
        },
        beforeDestroy(){
            this.clearTimer()
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
            runInv:function() {
                if (!this.timer)
                  this.timer = setInterval(() => {
                    this.gotoPage(this.nextIndex)
                  }, 2000)
            },
            clearTimer:function(){
                clearInterval(this.timer)
                this.timer=null
            },
            gotoPage:function(e){
                this.currentIndex=e
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
        margin-top: 1rem;

   }
   .adImg{
    height:100%;
    width:100%;
   }
   .adImg img{
    height:6rem;
   }
   .home_menu{
        padding:1rem;
        height:10rem;
   }
</style>
