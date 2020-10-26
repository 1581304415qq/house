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
                this.$http.post('/login',{username:'11',password:'11'})
                .then(({data:res})=>{
                    console.log(res)
                    res.code===0 && this.$router.push('/home')
                })
                .catch(e=>{

                })
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
