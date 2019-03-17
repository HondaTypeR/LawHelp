<template>
<div>
  <ab-header></ab-header>
        <div>
            <img src="@/assets/beijing.jpg" class="img">
        </div>
        <div class="float">
            <img src="@/assets/role.jpg" style="border-radius:60px">
            <span class="name">{{name}}</span>
            <span class="post">{{duty}}</span>
            <span class="unit">{{unit}}</span>
            <span class="goodat">证件 | 擅长</span>
            <span class="about">证件号:</span>
            <span class="gmsg">{{assestid}}</span>
            <span class="good">擅长:</span>
            <span class="amsg">{{goodat}}</span>
        </div>
        <div>
            <div class="none">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="提问" name="first" class="one"><ab-talkOne></ab-talkOne></el-tab-pane>
                    <el-tab-pane label="推荐" name="second"><ab-hot></ab-hot><ab-hot></ab-hot><ab-hot></ab-hot></el-tab-pane>
                    <el-tab-pane label="关注" name="third"><ab-hot></ab-hot></el-tab-pane>
                </el-tabs>
            </div>
        </div>
</div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
import TalkOne from '@/components/Base/Talk-one.vue'
import Hot from '@/components/Base/Hot.vue'
export default {
    name:'Talk',
    data(){
        return {
           activeName: 'second',
           name:'',
           unit:'',
           duty:'',
           goodat:'',
           assestid:''
      };
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer,
        'ab-talkOne':TalkOne,
        'ab-hot':Hot
    },
    created:function(){
    this.$axios.get('/api/find/hotprofessor/'+JSON.parse( localStorage.getItem("cardid")))
    .then((res)=>{
       console.log(res)
       this.name=res.data[0].name;
       this.duty=res.data[0].duty;
       this.unit=res.data[0].unit;
       this.goodat=res.data[0].goodat;
       this.assestid=res.data[0].assestid;
       
    })
  },
    
}
</script>

<style scoped>
.img{
    width: 1500px;
    height: 400px
}
.float{
    position: absolute;
    top: 80px;
    left: 200px;
}
.name{
    font-size: 23px;
    position: absolute;
    top: 15px;
    left: 250px;
    width: 71px;
}
.post{
    position: absolute;
    top: 18px;
    left: 350px;
    width: 100px;

}
.unit{
    position: absolute;
    top: 58px;
    left: 250px;
    width: 100px;
}
.goodat{
    width: 100px;
    position: absolute;
    left: 465px;
    top: 124px;
    font-size: 20px
}
.about{
    position: absolute;
    top: 174px;
    left: 138px;
    font-size: 17px;
}
.gmsg{
    width: 1025px;
    position: absolute;
    left: 200px;
    top: 174px;
}
.good{
    font-size: 17px;
    position: absolute;
    left: 138px;
    top: 229px;
}
.amsg{
    position: absolute;
    width: 1000px;
    left: 198px;
    top: 230px;
}
.none{
    height: 40px;
    background-color: #05b605;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
<style>
.el-tabs__item {
    padding: 0 50px !important;
    font-size: 24px!important
}
</style>

