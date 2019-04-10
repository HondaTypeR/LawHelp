<template>
  <div>
      <el-container>
          <el-header>
              <ab-header></ab-header>
          </el-header>
          <el-main>         
                            <div class="logo">
                                <img src="@/assets/logo.png">
                            </div>
                            <div class="box">
                               <div class="border">
                                <el-row :gutter="22">
                                   <el-card shadow="hover">
                                       <i class="el-icon-setting" @click="dialogVisible = true"></i>
                                       <el-dialog
                                          title="提示"
                                          :visible.sync="dialogVisible"
                                          width="30%"
                                          :before-close="handleClose">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
            <el-input class="logininput" type="username" v-model="ruleForm.name" maxlength="10" placeholder="最大支持10个字符"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="pass">
            <el-input class="logininput" type="password" v-model="ruleForm.pass" autocomplete="off" show-password maxlength="20" minlength="6" placeholder="最大支持20个字符"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input class="logininput"  type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password  maxlength="20"  minlength="6" placeholder="最大支持20个字符"></el-input>   
        </el-form-item>
  <el-form-item>
    <el-button type="primary"  plain @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

                                        </el-dialog>
                                       <router-link to="/Login"><i class="el-icon-circle-close" @click="clearLocalStrorage()"></i></router-link>
                                        <el-col :span="12">
                                        <!-- <img src="@/assets/role.jpg" class="thisimg"> -->
                                        <div class="addimg">
                                             <img :src="imgName" class="thisimg">
                                        </div>
                                         </el-col>
                                         <el-col :span="10">
                                        <p class="thisUser">当前账号:{{phone}}</p>
                                        <p class="thisUsername">欢迎您:{{username}}</p>
                                        <p class="thisTotal">账户余额:{{balance}}</p>
                                         <p class="thisBalance">用户积分:{{total}}</p>
                                        <p class="thisUserRole">身份:{{role}}</p>
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
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
        if(value.length<6){
          callback(new Error('密码长度不能少于6位'))
        }
        else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } 
        if(value.length<6){
          callback(new Error('密码长度不能少于6位'))
        }
        else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
        ruleForm: {
          name: '',
          pass:'',
          checkPass:'',
        },
        rules: {
          name: [
           {required:true,}
          ],
          pass: [
             { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
              { required: true,validator: validatePass2, trigger: 'blur' }
          ],
        },
      dialogVisible: false,
      phone:'',
      username:'',
      total:'',
      balance:'',
      role:'',
      imgName:'',
      flag:''
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
     this.$axios.get('/api/find/imgpath/'+JSON.parse( localStorage.getItem("data")))
      .then((res)=>{
        var x = 'http://39.107.75.95:8080/fileoo/'
        this.imgName=x+res.data[0].fileName
        console.log(this.imgName)
      })
      this.$axios({
        method:'post',
        url:'/api/find/flag',
        data:{
          username:JSON.parse(localStorage.getItem("name"))
        }
      }).then((res)=>{
        this.flag=res.data
        console.log(this.flag)
        if(this.flag==1){
          this.$notify.info({
          title: '系统提示',
          message: '您有新的付费咨询，请注意查看',
          duration: 0
        });
        }
      })
  },
   methods: {
      submitForm(formName) {
 const h = this.$createElement;

        this.$notify({
          title: '系统提示',
          message: h('i', { style: 'color: teal'}, '您已成功更改个人信息')
        });

        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios({
              method:"post",
              url:"/api/update/userinfo",
              data:{
                username:this.ruleForm.name,
                password:this.ruleForm.pass,
                phone:JSON.parse( localStorage.getItem("data"))
              }
            })
            .then((res)=>{
              this.dialogVisible=false
              console.log(res)
            })
          } else {
            alert("更新失败")
            console.log('error submit!!');
            return false;
          }
        });
      },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      clearLocalStrorage(){
        localStorage.clear();
      },
       open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },
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
    width: 229px;
    height: 150px;
}
.thiserach{
   margin: 10px
}
</style>
