<template>
    <div class='consult'>
        <navigation-bar/>

        <el-form :model="form" :rules="yearRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.detailAddress"></el-input>
          </el-form-item>
          <el-form-item>
              
          </el-form-item>

        </el-form>
        <div class="consult_form">
        <div class="consult_item">
            <div class="label">所在小区</div>
            <el-cascader
              v-model="form.road"
              :options="options"></el-cascader>
        </div>
        <div class="consult_item">
        <div class="label">详细地址</div>
            <el-input v-model="form.detailAddress" placeholder="请输入内容"></el-input>
        
      </div>
        <div class="consult_item">
        <div class="label">土地级别</div>
            <el-select v-model="form.level" placeholder="请选择">
            <el-option
              v-for="item in level"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="consult_item">
        <div class="label">房产类型 </div>
            <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="consult_item">
        <div class="label">是否为电梯房</div>
            <div>
              <el-radio v-model="form.elevator" label="1">是</el-radio>
              <el-radio v-model="form.elevator" label="2">否</el-radio>
            </div>
        </div>
        <div class="consult_item">
        <div class="label">建成年份</div>
            <el-input v-model='form.year'></el-input>
        </div>
        <div class="consult_item">
        <div class="label">产权证面积</div>
            <el-input v-model='form.propertyarea'></el-input>
        </div>
        <div class="consult_item">
        <div class="label">公摊面积</div>
            <el-input v-model='form.publicarea'></el-input>
        </div>
        <div class="consult_item">
        <div class="label">土地面积</div>
            <el-input v-model='form.area'></el-input>
        </div>
        <div class="consult_item">
        <div class="label">是否为学区房</div>
            <div>
              <el-radio v-model="form.schooldistrict" label="1">是</el-radio>
              <el-radio v-model="form.schooldistrict" label="2">否</el-radio>
            </div>
        </div>

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
                  label: '商业用地'
                }, {
                  value: '2',
                  label: '住房用地'
                }, {
                  value: '3',
                  label: '工业用地'
                }, {
                  value: '4',
                  label: '农业用地'
                }],
                type: [{
                  value: '1',
                  label: '店铺'
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
                      year:'2020',area:0,publicarea:0,propertyarea:0,schooldistrict:false
                },
                yearRules:{
                     name: [
                        { required: false, message: '请输入4位数字', trigger: 'blur' },
                        { min: 4, max: 4, message: '长度在 4个字符', trigger: 'blur' }
                      ],
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
   .consult_form{
    display:flex;
    flex-direction: column;
    min-height:70%;
   }
   .consult_item{
    display:flex;
    margin: .3rem;
    align-items: center;
    justify-items: flex-start;
    justify-content: flex-start;
   }
   .consult_item .label{
    width: 3rem;
    text-align: left;
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
