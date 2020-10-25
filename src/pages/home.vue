<template>
    <div  v-if='isShow' class='home'>
        <div class="ad">
            <img :src='adImgSrc'/>
        </div>
        <div class="menu">
            <el-button type="primary" @click='navigateTo(0)'>房价查询</el-button>   
        </div>
    </div>
    <div v-else>else</div>
</template>

<script>
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
        methods: {
            navigateTo:function(e){
                console.log('goto')
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
