<template>
    <div class='consult'>
        <navigation-bar/>
        <div>
            <div>所在小区</div>
            <el-cascader
              v-model="form.road"
              :options="options"></el-cascader>
        </div>
        <div>详细地址
            <el-input v-model="form.detailAddress" placeholder="请输入内容"></el-input>
        </div>
        <div>土地级别</div>
            <el-select v-model="form.level" placeholder="请选择">
            <el-option
              v-for="item in address"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <div>房产类型 
            <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in address"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>是否为电梯房
            <div>
              <el-radio v-model="form.elevator" label="1">备选项</el-radio>
              <el-radio v-model="form.elevator" label="2">备选项</el-radio>
            </div>
        </div>
        <div>建成年份
            <el-input v-model='form.year'></el-input>
        </div>
        <div>产权证面积
            <el-input v-model='form.propertyarea'></el-input>
        </div>
        <div>公摊面积
            <el-input v-model='form.publicarea'></el-input>
        </div>
        <div>土地面积
            <el-input v-model='form.area'></el-input>
        </div>
        <div>是否为学区房
            <div>
              <el-radio v-model="form.schooldistrict" label="1">备选项</el-radio>
              <el-radio v-model="form.schooldistrict" label="2">备选项</el-radio>
            </div>
        </div>

        <el-button id="consult_button" type="primary" @click='consult'>估价</el-button>
    </div>
</template>

<script>
    import consultResult from './consultResult.vue'
    import navigationBar from '../components/navigationBar.vue'
    export default {
    	data(){
            return{
              options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                  value: 'shejiyuanze',
                  label: '设计原则',
                }]}],
                address: [{
                  value: '1',
                  label: '黄金糕'
                }, {
                  value: '2',
                  label: '双皮奶'
                }, {
                  value: '3',
                  label: '蚵仔煎'
                }, {
                  value: '4',
                  label: '龙须面'
                }, {
                  value: '5',
                  label: '北京烤鸭'
                }, {
                  value: '6',
                  label: '北京烤鸭'
                }],
                value:'',

                input:'',
                radio:'',
                form:{road:[],detailAddress:'',level:'',type:'',elevator:false,
                      year:'2020',area:0,publicarea:0,propertyarea:0,schooldistrict:false
                }
            }
        },
        created(){
           
        },
        mounted(){
            
        },
        computed: {
        },
        methods: {
            consult:function(){
              this.$http.post('/consult',this.form)
              .then(({data:res})=>{
                if (res.code===0) {
              console.log(res)
                  this.$router.push({path:'/consultResult',name:'/consultResult',params:{res:[res.data,888]}})

    console.log(this.$route.params.res)

                }
              })
            },
            handleChange:function(){            }
        },
        components:{
            consultResult,
            navigationBar
        }
    }
</script>

<style>
   .consult{
        position: absolute;
        top:0;
        height: 100%;
        width: 100%;
   }

   #consult_button{
        background-color:#cf4233;
   }
</style>
