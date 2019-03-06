<template>
<div>
  <ab-header></ab-header>
        <div>
            <img src="@/assets/beijing.jpg" class="img">
        </div>
        <div class="float">
            <img src="@/assets/role.jpg" style="border-radius:60px">
            <span class="name">张锋</span>
            <span class="post">副主任医师</span>
            <span class="unit">吉林省法院</span>
            <span class="goodat">简介 | 擅长</span>
            <span class="about">简介:</span>
            <span class="gmsg">副主任医师，参加工作18年，对常见妇科疾病有比较深入的研究，擅长各种不孕不育的检查和治疗。服务范围包括：准确的推断怀孕日期，妇科炎症的治疗，妇科内分泌疾病的诊治，孕期全程跟踪检查，优生优育和遗传病咨询，不孕不育原因的查找和治疗等。</span>
            <span class="good">擅长:</span>
            <span class="amsg">功能失调性子宫出血,习惯性流产,男性不育,宫颈糜烂,子宫肌瘤,外阴瘙痒,卵巢囊肿,宫颈炎,不孕症,流产,外阴阴道念珠菌病,多发性内分泌腺瘤病,月经失调</span>
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
           activeName: 'second'
      };
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer,
        'ab-talkOne':TalkOne,
        'ab-hot':Hot
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
    font-size: 25px;
    position: absolute;
    top: 7px;
    left: 250px;
    width: 50px;
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

