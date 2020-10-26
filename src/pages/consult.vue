<template>
    <div class='consult'>
        <navigation-bar/>

        <el-form :model="form" :rules="rules" ref="consultForm" label-width="100px" class="consult_form">
          <el-form-item label="所在小区">
              <el-cascader
              v-model="form.road"
              :options="options"></el-cascader>
          </el-form-item>

          <el-form-item label="详细地址">
              
            <el-input v-model="form.detailAddress" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="土地级别">
            <el-select v-model="form.level" placeholder="请选择">
            <el-option
              v-for="item in level"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="房产类型">
            <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="是否为电梯房">
                <el-radio :disabled="form.type==='1'?false:true" v-model="form.elevator" label="1">是</el-radio>
                <el-radio :disabled="form.type==='1'?false:true" v-model="form.elevator" label="2">否</el-radio>
          </el-form-item>
          <el-form-item label="建成年份" prop='year'>
            <el-input v-model='form.year'></el-input>
          </el-form-item>

          <el-form-item label="产权证面积" prop='propertyarea'>
            <el-input v-model='form.propertyarea'></el-input>
          </el-form-item>
          <el-form-item label="公摊面积" prop='publicarea'>
            <el-input v-model='form.publicarea'></el-input>
          </el-form-item>
          <el-form-item label="土地面积" prop='area'>
            <el-input v-model='form.area'></el-input>
          </el-form-item>
          <el-form-item label="是否为学区房">
              <el-radio v-model="form.schooldistrict" label="1">是</el-radio>
              <el-radio v-model="form.schooldistrict" label="2">否</el-radio>
          </el-form-item>
        </el-form>

        <div class="consult_button">
        <el-button id="consult_button" type="primary" @click='consult'>估价</el-button>
      </div>
    </div>
    </div>
</template>

<script>
    import consultResult from './consultResult.vue'
    import navigationBar from '../components/navigationBar.vue'
    export default {
    	data(){
                var validatorYear=(rule, value, callback)=>{
                    const age= /^[0-9]*$/
                      if (!age.test(value)) {
                        callback(new Error('只能为数字'))
                      }else{
                        callback()
                      }
                };
            return{
              options: [{
                value: '001',
                label: '上杭',
                children: [{
                  value: '001',
                  label: '陵城',
                },
                {
                  value: '002',
                  label: '城西',
                },{
                  value: '003',
                  label: '城东',
                },{
                  value: '004',
                  label: '城南',
                }]},
                {
                value: '002',
                label: '武平',
                children: [{
                  value: '001',
                  label: '陵城',
                },
                {
                  value: '002',
                  label: '城西',
                },{
                  value: '003',
                  label: '城东',
                },{
                  value: '004',
                  label: '城南',
                }]}],
                level:[{
                  value: '1',
                  label: '一级地'
                }, {
                  value: '2',
                  label: '二级地'
                }, {
                  value: '3',
                  label: '三级地'
                }],
                type: [{
                  value: '1',
                  label: '套房'
                }, {
                  value: '2',
                  label: '自建房'
                }, {
                  value: '3',
                  label: '商品房子'
                }, {
                  value: '4',
                  label: '老宅'
                }],
                value:'',

                input:'',
                radio:'',
                form:{road:[],detailAddress:'',level:'',type:'',elevator:false,
                      year:'2020',area:'0',publicarea:'0',propertyarea:'0',schooldistrict:false
                },
                rules:{
                     year: [
                        { required: true, message: '请输入年份', trigger: 'blur'},
                        { min: 4, max: 4, message: '长度在 4个字符', trigger: 'blur'},
                        {validator:validatorYear, trigger: 'blur'}
                    ],
                    publicarea:[
                        { required: true, message: '不能为空', trigger: 'blur'},
                        { min: 1, max: 9, message: '长度在 1-9个字符', trigger: 'blur'},
                        {validator:validatorYear, trigger: 'blur'}
                    ],
                    propertyarea:[
                        { required: true, message: '不能为空', trigger: 'blur'},
                        { min: 1, max: 9, message: '长度在 1-9个字符', trigger: 'blur'},
                        {validator:validatorYear, trigger: 'blur'}
                    ],
                    area:[
                        { required: true, message: '不能为空', trigger: 'blur'},
                        { min: 1, max: 9, message: '长度在 1-9个字符', trigger: 'blur'},
                        {validator:validatorYear, trigger: 'blur'}
                    ]

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
                console.log(this.form)
                //验证输入有效性
                this.$refs.consultForm.validate(v=>{
                    console.log(v)
                    v&&this.$http.post('/consult',this.form)
                    .then(({data:res})=>{
                    if (res.code===0) {
                      console.log(res)
                      this.$router.push({path:'/consultResult',name:'/consultResult',params:{res:[res.data.total,res.data.price]}})
                    }
                  })
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
   .consult_form{
    margin:15px;
   }
   .consult_button{
    bottom: 1rem;
    width: 100%;
    height: 1rem;
    }
   #consult_button{
        background-color:#cf4233;
   }
</style>
