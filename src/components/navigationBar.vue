<template>
    <div class='navigationBar'>
        <div class="navigationBar_icon" @click='back'>&lt;</div>
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
            back:function(){
                this.$router.go(-1)
            }
        },
        components:{

        },
    }
</script>

<style>
   .navigationBar{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        height:1rem;
   }
   .navigationBar_icon{
        font-size: .8rem;
        margin-left: .5rem;
   }
</style>
