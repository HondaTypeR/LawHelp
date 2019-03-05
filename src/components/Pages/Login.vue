<template>
  <div>
      <ab-header></ab-header>
      <div class="form">
          <div class="box-left">
              <span class="title">账号登陆</span>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" required="true">
            <el-input class="user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input class="user" type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="submitForm('ruleForm2')" class="login">登陆</el-button>
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        imageUrl: '',
        ruleForm2: {
          pass: '',
        },
        rules2: {
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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

