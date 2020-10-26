<template>
    <div class='login' @click='login' >
        <el-button id='login_button'>微信登录</el-button>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
            }
        },
        created(){
           
        },
        mounted(){
            
        },
        computed: {
        },
        methods: {
            login:function(){
                this.$router.push('/home')
            }
        },
    }
</script>

<style>
   .login{
        display:flex;
        justify-content: center;
        align-items: center; 
        position: absolute;
        height: 100%;
        width: 100%;
   }
    #login_button{
        background-color:#cf4233;
    }
</style>
