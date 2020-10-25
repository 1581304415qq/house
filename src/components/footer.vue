<template>
    <div class='footer'>
        <p>
        FOOTER {{message}}
        </p>
        <button @click='click'>click</button>
    </div>
</template>

<script>
    export default {
        // 声明 props
        props: ['message','titleName'],
    	data(){
            return{
                count:0,
                label:''
            }
        },
        created(){
           
        },
        mounted(){
            
        },
        computed: {
        },
        methods: {
            click:function(){
                this.count++
                console.log(this.label)
                 this.$emit('input', this.label+this.count);
                 this.$emit('update:titleName', this.titleName+this.count); //触发 input 事件，并传入新值
                this.$emit('check',this.count)
                this.$router.push('login').catch(failure => {
                    console.log('failure')
})
            }
        },
    }
</script>

<style>
   
</style>
