<template>
  <div>
      <el-container>
          <el-header>
              <ab-header :phone="phone" :username="username" :total="total" :balance="balance" :role="role"></ab-header>
          </el-header>
          <el-main>
                     <div class="border">
                            <div class="logo">
                                <img src="@/assets/logo.png">
                            </div>
                            <div class="box">
                                <el-row :gutter="22">
                                   <el-card shadow="hover">
                                       <i class="el-icon-setting"></i>
                                       <router-link to="/Login"><i class="el-icon-circle-close"></i></router-link>
                                        <el-col :span="12">
                                        <img src="@/assets/role.jpg" class="thisimg">
                                         </el-col>
                                         <el-col :span="10">
                                        <p class="thisUser">当前账号:{{this.phone}}</p>
                                        <p class="thisUsername">欢迎您:{{this.username}}</p>
                                        <p class="thisTotal">账户余额:{{this.total}}</p>
                                         <p class="thisBalance">用户积分:{{this.balance}}</p>
                                        <p class="thisUserRole">身份:{{this.role}}</p>
                                        {{$route.params.phone}}
                                         </el-col>
                                     </el-card>
                                </el-row>
                             </div>
                             
                     </div>
                     <div class="thiserach">
                            <el-autocomplete
                           
                            placeholder="请输入内容"
                            
                            >
                            </el-autocomplete>
                            <el-button type="success">搜索</el-button>
                            </div>
              <ab-body></ab-body>
          </el-main>
          <el-footer>
              <ab-footer></ab-footer>
          </el-footer>
      </el-container>
  </div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Body from '@/components/Const/Body.vue'
import Footer from '@/components/Const/Footer.vue'
export default {
    name: 'Home',
    data () {
    return {
     phone:'',
     username:'',
     total:'',
     balance:'',
     role:'',
     }
     },
    components:{
      'ab-header':Header,
      'ab-body':Body,
      'ab-footer':Footer,
  },
  // created(){
  //  var a= JSON.parse( localStorage.getItem("data")); 
  //  console.log(a)
  //  function
  // }
  created:function(){
     var self=this
     var id= JSON.parse( localStorage.getItem("data")); 
     console.log(id)
     this.$axios.get("/api/find/userinfos/"+JSON.parse( localStorage.getItem("data")))
     .then((res)=>{
       console.log(res.data.result[0].phone)
       this.phone=res.data.result[0].phone;
       this.username=res.data.result[0].username;
       this.total=res.data.result[0].total;
       this.balance=res.data.result[0].balance;
       var changeRole=res.data.result[0].role;
       if(changeRole==1){
         this.role='专家'
       }else{
         this.role='用户'
       }

     })
  }
}
</script>

<style scoped>
.el-autocomplete{
  width: 500px;
  margin-left: 350px;
  margin-bottom: 38px;
}
.el-button{
  font-size: 13px
}
.box{
  width: 555px;
  float: left;
  margin-left: 350px;
  margin-bottom: 46px;
}
.logo{
  float: left;
}
img.thisimg {
    border: ridge;
    border-radius: 35px;
    padding: 3px;
    margin-top: 15px;
}
.thiserach{
   margin: 10px
}
</style>
