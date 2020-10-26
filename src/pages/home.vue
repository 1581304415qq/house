<template>
    <div  v-if='isShow' class='home'>
        <div class="ad">
            <img :src='adImgSrc'/>
        </div>
        <div class="menu">
            <el-button type="primary" @click='navigateTo(0)'>房价查询</el-button>   
        </div>
    </div>
    <div v-else>
        <div>
            <div  @click='navigateTo(1)'>back</div>
            <consult-page></consult-page>
        </div>
    </div>
</template>

<script>
    import consultPage from './consult.vue'
    export default {
    	data(){
            return{
                isShow:true,
                adImgSrc:'./assets/logo.png',
                ads:[]
            }
        },
        created(){
           
        },
        mounted(){
        },
        computed: {
            
        },
        components:{
            consultPage
        },
        methods: {
            navigateTo:function(e){
                // this.$router.push('/consult')
              if (e===0) this.isShow=false
              else if (e===1) this.isShow=true
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
   .ad{
        height:5rem;
   }
   .menu{
        padding:1rem;
        height:10rem;
   }
</style>
