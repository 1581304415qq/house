
<template>
<div class="container">
  <div class="title_box">
    <div class="page_title">{{pageTitle}}</div>
  </div>
  <div class="menu">
    <div class="menu_item right select" @click='select(0)'><div class="menu_item_text select">{{menuTotal}}</div></div>
    <div class="menu_item left" @click='select(1)'><div class="menu_item_text">{{menuPrice}}</div></div>
  </div>
  <div class="estimate_box">
    <div class="estimate">
    <div>{{showData}}</div>
    <div>{{unit}}</div>
    </div>
  </div>
  <div class="service">
    <div class="service_text">{{serviceText}}</div>
  </div>
  <div class="footer">{{footer}}</div>
</div>

</template>
<script>
  export default {
  name: 'app',
  data () {
    return {
      menuTotal:'房产总价',
      menuPrice:'房产单价',
      pageTitle:'您的房产评估价为:',
      unit:'元/套',
      serviceText:'我要申请贷款>',
      footer:'注：以上价格仅供参考，具体房屋估价以我行网点与您共同确认后的最终价格为准，房产估价未扣除出让金与法定优先受偿款',

      showData: 573000
    }
  },
  methods:{
    select:function(e){

    }
  },
  components:{
  }
}
</script>

<style>
  
.container{
  position:absolute;
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background:  -webkit-gradient(linear, left top, left bottom, color-stop(0%,#c3b0a0), color-stop(100%,#d9cdc3));
}
.title_box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
}
.page_title{
  font-size: .9rem;
    font-weight: bolder;
}
.menu{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 5rem;
  border-radius: 5px;
}
.menu_item{
  display: flex;
  flex-grow: 1;
  width:  100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  /*border-radius: 5px;kokmn  vhjiopmkjnb  jkl;l*/
  background-color: white;
}
.menu_item.left{
  border-radius: 0 5px 5px 0;
}
.menu_item.right{
  border-radius: 5px 0 0 5px;
}
.menu_item:before{
  position: absolute;
  content: " ";
  display: block;
  width:2.3rem;
}
.menu_item_text{
  font-size: .35rem;
}
.select{
  background-color: #cf4233;
  color: white;
}
.menu_price{
  width: 2rem;
}
.estimate_box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 10rem;
}
.estimate_box:before {
  position: absolute;
  content: " ";
  display: block;
  background-color: black;
  border-radius: 100%;
  width: 5.5rem;
  height: 5.5rem;
}
.estimate{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: #cf4233;
  font-size: .8rem;
    border-style: solid;
    border-color: #fff;
    border-width: 10px;}
.service{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  /*border-radius: 10%;
  background-color: #cf4233;*/
}
.service:before{
  position: absolute;
  content: ".";
  display: block;
  background-color: white;
  border-radius: 5px;
  width:3.6rem;
  height: .9rem;
}
.service_text{
  position: absolute;
  width: 3.5rem;
  height: .7rem;
  line-height: .7rem;
  border-radius: 5px;
  background-color: #cf4233;
  font-size: .4rem;
  text-align: center;
}
.footer{
    font-size: .3rem;
  position: absolute;
  bottom: 0;
  margin-left: 30px;
  margin-right: 30px;
}
</style>