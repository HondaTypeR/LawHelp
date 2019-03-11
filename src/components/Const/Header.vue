<template>
<div>
     <div class="nav">
         <router-link to="/"><span>首页</span></router-link>
         <router-link to="/Ask"><span>免费提问</span></router-link>
         <router-link to="/Login"><p class="login">登陆</p></router-link>
         <router-link to="/Regin"><p class="login">注册</p></router-link>
         <ul class="box">
             <li>专业律师</li>
             <li>法律援助</li>
             <li>今日说法</li>
             <li>经典案例</li>
            <router-link to="/Professor"> <li>认证专家</li></router-link>
            <router-link to="/TalkAbout"> <li>沟通交流</li></router-link>
             <li>服务热线</li>
         </ul>
     </div>
</div>
</template>
<script>
  export default {
    name:'navMenu',
    data() {
      return {
      
      };
    },
    methods: {

      }
    }
  
</script>
<style scoped>
.nav{
    width: 100%;
    max-width: 1500px;
    background-color: #EBF2E9;
    height: 30px;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top:-7px
}
.login{
    float: left;
    padding-right: 10px;
    margin-right: 2px;
    font-size: 12px;
    line-height: 7px;
    color: black

}
span{
    position: relative;
    display: block;
    font-style: normal;
    cursor: pointer;
    float: left;
    height: 30px;
    line-height: 30px;
    padding: 0 8px;
    background: #6eb14a;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    margin-right: 20px;
    margin-left: 120px
}
.nav span{
    font-size: 13px
}
.box {
    list-style-type: none;
    margin:0px;
    padding:0px;
    float: right;
    margin-right: 180px;
    height: 40px
}
.box li {
    padding:7px;
    float:left;
    width:60px;
    height:190px;
    font-size: 13px
}
</style>
