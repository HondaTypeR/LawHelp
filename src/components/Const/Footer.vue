<template>
<div>
  <div class="border">
       <div>
           <p>CopyRight@2003-2019 findlaw.cn ALL Rights Reservrd 版权所有</p>
           <p>中国大型的法律服务平台，最早的法律咨询网站，能够为广大用户提供在线免费法律咨询服务</p>
       </div>
       <div class="imgs">
           <img src="@/assets/footer1.jpg"> 
           <img src="@/assets/footer2.jpg"> 
           <img src="@/assets/footer3.jpg"> 
           <img src="@/assets/footer4.jpg"> 
           <img src="@/assets/footer5.png"> 
           <img src="@/assets/footer6.png"> 
       </div>
  </div>
   </div> 
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.border{
    width: 100%;
    height: 140px;
    background-color: gray;
    flex-wrap: nowrap;
    flex-direction: row;
    max-width: 1500px;
    float: left;
}
p{
    text-align: center
}
.imgs{
    display: block;
    text-align: center;
    line-height: 41px;
    color: #999;
}
</style>
