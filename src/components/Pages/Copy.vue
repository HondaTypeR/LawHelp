<template>
  <div>
      <div class="form">
      <el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" label-width="100px" class="demo-ruleForm">
            <h1 class="title">法律帮</h1>
        <el-button type="text" v-show="false" @click="submited()"></el-button>
        <el-form-item label="手机号" prop="phone">
            <el-input class="user" v-model.number="userinfo.phone" placeholder="注册的手机号将作为您的登陆手机号" maxlength="11"></el-input>
        </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input class="user" type="username" v-model="userinfo.username" maxlength="10" placeholder="最大支持10个字符"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input class="user" type="password" v-model="userinfo.pass" autocomplete="off" show-password maxlength="20" minlength="6" placeholder="最大支持20个字符"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input class="user"  type="password" v-model="userinfo.checkPass" autocomplete="off" show-password  maxlength="20"  minlength="6" placeholder="最大支持20个字符"></el-input>   
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('userinfo')">提交</el-button>
            <el-button @click="resetForm('userinfo')">重置</el-button>
        </el-form-item>
        </el-form>
      </div>

</div>
</template>
<script>
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
        imageUrl: '',
        userinfo: {
          username:'',
          pass: '',
          checkPass: '',
          phone: '',
        },
        rules2: {
          username:[
            {required:true,}
          ],
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            {required: true, validator: checkPhone, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) { 
      const axios =require('axios');
      axios.get('/api/add/user/'+this.userinfo.phone+'/'+this.userinfo.username+'/'+this.userinfo.pass)
      .then(function(response){
        console.log(response.data.success)
        var flag = response.data.success;
        if(flag=true){
         alert("成功")
        }else{
          alert("失败")
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
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    components:{
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
.el-radio-group{
    margin-top: 19px
}
.title[data-v-0f14198e] {
    font-size: 40px;
    color: #6EB14A;
    text-align: -webkit-center;
}
</style>
<style>
.el-form-item__label{
    margin-top: 10px
}
</style>

