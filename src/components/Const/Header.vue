<template>
<div>
     <div class="nav">
         <router-link to="/"><span>首页</span></router-link>
         <router-link to="/Ask"><span>免费提问</span></router-link>
         <ul class="box">
             <li>法律援助</li>
            <router-link to="/Step"> <li>我的待办</li></router-link>
             <router-link to="/Case"><li>经典案例</li></router-link>
            <router-link to="/Professor"> <li>认证专家</li></router-link>
            <router-link to="/TalkAbout"> <li>沟通交流</li></router-link>   
            <el-tooltip  class="item" effect="dark" content="服务热线：0411-88889999" placement="bottom">
                <el-button class="tel">服务热线</el-button>
            </el-tooltip>
             <li class="now">@当前用户:{{username}}</li>
             <li><router-link to="/Login">安全退出</router-link></li>
         </ul>
     </div>
</div>
</template>
<script>
  export default {
    name:'navMenu',
    data() {
      return {
          username:''
      };
    },
    methods: {
      },
       created:function(){
     this.$axios.get("/api/find/userinfos/"+JSON.parse( localStorage.getItem("data")))
     .then((res)=>{
       this.username=res.data.result[0].username;
     })
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
.now{
    width: 180px  !important;
    color: red
}
.tel{
    line-height: 4px;
    font-size: 13px;
    margin-top: 2px;
    border: none;
    background-color: #EBF2E9;
}
</style>
