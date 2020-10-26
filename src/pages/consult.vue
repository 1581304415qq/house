<template>
    <div class='consult'>
        <div v-if='!isConsult'>
        <div>
            <div>所在小区</div>
            <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in address"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>详细地址
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div>土地级别</div>
            <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in address"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <div>房产类型 
            <el-select v-model="value" placeholder="请选择">
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
              <el-radio v-model="radio" label="1">备选项</el-radio>
              <el-radio v-model="radio" label="2">备选项</el-radio>
            </div>
        </div>
        <div>建成年份
            <el-input></el-input>
        </div>
        <div>产权证面积
            <el-input></el-input>
        </div>
        <div>公摊面积
            <el-input></el-input>
        </div>
        <div>土地面积
            <el-input></el-input>
        </div>
        <div>是否为学区房
            <div>
              <el-radio v-model="radio" label="1">备选项</el-radio>
              <el-radio v-model="radio" label="2">备选项</el-radio>
            </div>
        </div>

        <el-button type="primary" @click='consult'>估价</el-button>
</div>
    <div v-if='isConsult'>
        <consult-result></consult-result>
    </div>
    </div>
</template>

<script>
    import consultResult from './consultResult.vue'
    export default {
    	data(){
            return{
                address: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                }, {
                  value: '选项6',
                  label: '北京烤鸭'
                }],
                value:'',
                isConsult:false,
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
                this.isConsult=true
            }
        },
        components:{
            consultResult,
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
</style>
