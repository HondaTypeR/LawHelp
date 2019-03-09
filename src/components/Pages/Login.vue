<template>
  <div>
      <ab-header></ab-header>
      <div class="form">
          <div class="box-left">
              <span class="title">账号登陆</span>
        <el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" label-width="100px" class="demo-ruleForm">
         <el-form-item label="手机号" prop="phone">
            <el-input class="user" v-model.number="userinfo.phone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input class="user" type="password" v-model="userinfo.pass" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="submitForm('userinfo')" class="login">登陆</el-button>
        </el-form-item>
        </el-form>
        </div>
        <div>
              <img src="@/assets/logo.png">
        </div>
      </div>
      <ab-footer></ab-footer>
</div>
</template>
<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
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
        imageUrl: '',
        userinfo: {
          phone:'',
          pass: '',
        },
        rules2: {
          phone:[
            {required:true, validator: checkPhone, trigger: 'blur'}
          ],
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
       const axios =require('axios');
      axios.get('/api/find/user/'+this.userinfo.phone+'/'+this.userinfo.pass)
      .then(function(response){
        console.log(response.data.success)
        var flag = response.data.success;
        if(flag==true){
          alert("登陆成功")

        }else{
          alert("登陆失败")
        }

      })
      .then(function(error){
        console.log(error)
      })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer
    }
  }
</script>

<style scoped>
.user{
    width: 300px;
    margin-top: 10px;
}
.form{
    width: 1000px;
    height: 380px;
    border: 1px solid #6EB14A;
    margin-top: 10px;
    margin-left: 280px;
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
.box-left{
    float: left;
}
.title{
    font-size: 20px;
    margin-left: 45px;
    color: #6EB14A
}
</style>
<style>
.el-form-item__label{
    margin-top: 10px
}
</style>

