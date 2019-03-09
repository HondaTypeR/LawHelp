<template>
  <div>
      <ab-header></ab-header>
      <div class="form">
          <div class="box-left">
        <el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" label-width="100px" class="demo-ruleForm">
            <span class="title">账号注册</span>
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon">上传头像</i>
        </el-upload>
          <el-form-item label="用户名" prop="username">
            <el-input class="user" type="username" v-model="userinfo.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input class="user" type="password" v-model="userinfo.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input class="user"  type="password" v-model="userinfo.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
            <el-input class="user" v-model.number="userinfo.phone"></el-input>
        </el-form-item>
         <el-form-item label="选择身份" prop="role">
            <el-radio-group v-model="userinfo.role">
            <el-radio label="1" v-model="userinfo.role">普通用户</el-radio>
            <el-radio label="2" v-model="userinfo.role">付费专家</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('userinfo')">提交</el-button>
            <el-button @click="resetForm('userinfo')">重置</el-button>
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
        } else {
          if (this.userinfo.checkPass !== '') {
            this.$refs.userinfo.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.userinfo.pass) {
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
          role: '',
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
          role: [
            { required: true, message: '请选择身份', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
      const axios =require('axios');
      axios.get('/api/add/user/'+this.userinfo.username+'/'+this.userinfo.pass+'/'+this.userinfo.phone+'/'+this.userinfo.role)
      .then(function(response){
        console.log(response.data.success)
        var flag = response.data.success;
        if(flag==true){
          alert("注册成功")
        }else{
          alert("注册失败")
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

