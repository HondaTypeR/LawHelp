<template>
  <div :style="note">
      <div class="form" >
      <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo" label-width="100px" class="demo-ruleForm">
            <p class="title">法律帮</p>
            <p class="detail">注册法律帮,发现更多可依赖的解答</p>
        <el-button type="text" v-show="false" @click="submited()"></el-button>
        <el-form-item label="手机号" prop="phone">
            <el-input class="logininput" v-model.number="userinfo.phone" placeholder="注册的手机号将作为您的登陆凭证" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
            <el-input class="logininput" type="username" v-model="userinfo.username" maxlength="10" placeholder="最大支持10个字符"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="pass">
            <el-input class="logininput" type="password" v-model="userinfo.pass" autocomplete="off" show-password maxlength="20" minlength="6" placeholder="最大支持20个字符"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input class="logininput"  type="password" v-model="userinfo.checkPass" autocomplete="off" show-password  maxlength="20"  minlength="6" placeholder="最大支持20个字符"></el-input>   
        </el-form-item>
        <el-form-item label="验证码"  prop="identify">
            <el-input class="identify" v-model.number="userinfo.identify" placeholder="请输入验证码" maxlength="4"></el-input>
            <div class="code" @click="refreshCode">
            <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button class="submit"  type="primary" @click="submitForm('userinfo')">注册</el-button>
            <el-button class="reset" @click="resetForm('userinfo')">重置</el-button>
        </el-form-item>
        <el-form-item>
            <p class="warns">注册即代表同意《法律帮协议》《隐私保护指引》注册机构号</p>
        </el-form-item>
         <router-link to="/Login" > <p class="haveId">已有账号? 登陆</p></router-link>
        </el-form>
      </div>

</div>
</template>
<script>
import SIdentify from '@/components/Base/Identify.vue'
  export default {
    name:'Regin',
    data() {
      //正则验证手机号
      var TEL = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }   
          if(!TEL.test(value)){
            callback(new Error('手机号格式有误，请重新输入'))
          }
          else{
            callback();
          }
        },1000);
      };
        var checkIdentify = (rule, value, callback)=>{
           if (value === '') {
          callback(new Error('请输入验证码'));
        } 
        if(this.ID !=value){
          callback(new Error('验证码输入错误'));
        }
        else {
          callback();
        }
        };
       var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
        if(value.length<6){
          callback(new Error('密码长度不能少于6位'))
        }
        else {
          if (this.userinfo.checkPass !== '') {
            this.$refs.userinfo.validateField('checkPass');
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
        else if (value !== this.userinfo.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
       return {
           identifyCodes: "1234567890",
           identifyCode: "",
          note: {
          backgroundImage: "url(" + require("@/assets/bei.jpg") + ")",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          marginTop: "5px",
          height:"810px"
          },
          rules: {
              phone: [
                {required: true, validator: checkPhone, trigger: 'blur' }
              ],
              identify:[
                {required: true}
              ],
             username:[
              {required:true,}
              ],
             pass: [
              { required: true,validator: validatePass, trigger: 'blur' }
              ],
            checkPass: [
             { required: true,validator: validatePass2, trigger: 'blur' }
            ],
            identify:[  {required:true, validator: checkIdentify, trigger: 'blur'}]
          
        },
        userinfo: {
          phone: '',
          identify:'',
          username:'',
          pass: '',
          checkPass: '',
          role:0,
          balance:'0',
          toal:'0'
        },
      };
    },
    methods: {
      submitForm(formName) { 
        const self = this;
     this.$refs[formName].validate((valid) => {
       if (valid) {
      const axios =require('axios');
      axios.get('/api/add/user/'+this.userinfo.phone+'/'+this.userinfo.username+'/'+this.userinfo.pass+'/'+this.userinfo.role+'/'+this.userinfo.balance+'/'+this.userinfo.toal)
      .then(function(response){
        console.log(response.data.success)
        var flag = response.data.success;
        debugger
        if(flag==true){
         alert("成功")
         self.$router.replace('/Login')
        }else{
          alert("该手机已注册请直接登陆")
          
        }
      })
      .then(function(error){
        console.log(error)
      })
       } else {
            console.log('error submit!!');
            return false;
          }
       });
      },
      randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
        this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
      this.ID=this.identifyCode
    },
     resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
     mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
    components:{
      's-identify':SIdentify
    }
  }
</script>

<style scoped>
.logininput{
    width: 300px;
    margin-top: 10px;
}
.form{
    width: 460px;
    height: 600px;
    margin-left: 500px;
    background-color: whitesmoke;
}
.title {
    font-size: 68px;
    color: #66B1FF;
    text-align: -webkit-center;
    margin-top: 8px;
}
.detail{
      color: #66B1FF;
    font-size: 24px;
    margin-left: 44px;
    margin-top: -56px;
}
.identify.el-input {
    width: 51%;
}
.warns{
      font-size: 11px;

}
.haveId{
    font-size: 20px;
    background-color: whitesmoke;
    height: 55px;
    text-align: center;
    line-height: 54px;
}
.code {
    width: 114px;
    height: 40px;
    border: 1px solid #fffefe;
    float: right;
    margin-right: 59px;
}
.submit{
  width: 185px
}
.reset{
  width: 100px
}
</style>
<style>
.el-form-item__label{
    margin-top: 10px
}
</style>

