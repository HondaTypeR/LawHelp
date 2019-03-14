<template>
  <div :style="note">
      <div class="form">
              <p class="title">法律帮</p>
             <p class="detail">登陆法律帮,发现更多可依赖的解答</p>
        <el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" label-width="100px" class="demo-ruleForm">
         <el-form-item label="手机号" prop="phone">
            <el-input class="user" v-model.number="userinfo.phone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input class="user" type="password" v-model="userinfo.pass" autocomplete="off" show-password></el-input>
        </el-form-item>
         <el-form-item label="验证码"  prop="identify">
            <el-input class="identify" v-model.number="userinfo.identify" placeholder="请输入验证码" maxlength="4"></el-input>
            <div class="code" @click="refreshCode">
            <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="submitForm('userinfo')" class="login">登陆</el-button>
        </el-form-item>
         <el-form-item>
            <p class="warns">登陆即代表同意《法律帮协议》《隐私保护指引》登陆机构号</p>
        </el-form-item>
         </el-form-item>
         <router-link to="/Regin" > <p class="haveId">已有账号? 登陆</p></router-link>
        </el-form>
        </el-form>
      </div>
</div>
</template>
<script>
import SIdentify from '@/components/Base/Identify.vue'
  export default {
    name:'Login',
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
        } else {
          if (this.userinfo.checkPass !== '') {
            this.$refs.userinfo.validateField('checkPass');
          }
          callback();
        }
      };
      return {
         note: {
          backgroundImage: "url(" + require("@/assets/bei.jpg") + ")",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          marginTop: "5px",
          height:"690px"
          },
         identifyCodes: "1234567890",
         identifyCode: "",
        imageUrl: '',
        userinfo: {
          phone:'',
          pass: '',
          identify:'',
        },
        rules2: {
          phone:[
            {required:true, validator: checkPhone, trigger: 'blur'}
          ],
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
           identify:[  {required:true, validator: checkIdentify, trigger: 'blur'}]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const self = this;
        const axios =require('axios');
      axios.get('/api/find/user/'+this.userinfo.phone+'/'+this.userinfo.pass)
      .then(function(response){
        var nphone=response.data.result[0].phone;
        var nusername=response.data.result[0].username;
        var ntotal=response.data.result[0].total;
        var nbalance=response.data.result[0].balance;
        var nrole=response.data.result[0].role;
         console.log(nphone)
          console.log(response)
        var flag = response.data.success;
        if(flag==true){
          alert("登陆成功")
          self.$router.push({path:"/",query:{p:nphone,u:nusername,t:ntotal,b:nbalance,r:nrole}});
        }else{
          alert("登陆失败")
        }

      })
      .then(function(error){
        console.log(error)
      })
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
.user{
    width: 300px;
    margin-top: 10px;
}
.form{
    width: 460px;
    height: 600px;
    margin-left: 500px;
    background-color: whitesmoke;
    margin-top: 15px
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader-icon[data-v-0f14198e] {
    font-size: 22px;
    color: #0061eb;
    width: 466px;
    height: 108px;
    line-height: 120px;
    text-align: center;
}
.login{
    width: 300px
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
.code {
    width: 114px;
    height: 40px;
    border: 1px solid #fffefe;
    float: right;
    margin-right: 59px;
}
.haveId{
    font-size: 20px;
    background-color: white;
    height: 55px;
    text-align: center;
    line-height: 54px;
}
.warns{
      font-size: 11px;

}
</style>
<style>
.el-form-item__label{
    margin-top: 10px
}
</style>

