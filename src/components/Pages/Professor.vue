<template>
  <div>
      <ab-header></ab-header>
      <div class="form">
          <div class="box-left">
        <el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" label-width="100px" class="demo-ruleForm">
            <span class="title">认证专家</span>
        <el-button type="text" v-show="false" @click="submited()"></el-button>
        <el-form-item label="手机号" prop="phone">
            <el-input class="user" v-model.number="userinfo.phone" placeholder="注册的手机号将作为您的登陆手机号" maxlength="11"></el-input>
        </el-form-item>
          <el-form-item label="真实姓名" prop="name">
            <el-input class="user" type="name" v-model="userinfo.name" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
            <el-input class="user" type="idcard" v-model="userinfo.idcard" autocomplete="off"></el-input>
        </el-form-item>
       <el-form-item label="证件号" prop="assestid">
            <el-input class="user" type="assestid" v-model="userinfo.assestid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="unit">
            <el-input class="user" type="unit" v-model="userinfo.unit" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="职称" prop="duty">
            <el-input class="user" type="duty" v-model="userinfo.duty" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="擅长" prop="goodat">
            <el-input class="user" type="goodat" v-model="userinfo.goodat" autocomplete="off"></el-input>
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
import Home from '@/components/Home.vue'
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
       return {
         userinfo: {
          name:'',
          idcard: '',
          phone: '',
          assestid:'',
          unit:'',
          duty:'',
          goodat:'',
        },
        rules2: {
          name:[
            {required:true,}
          ],
          idcard: [
            { required: true,trigger: 'blur' }
          ],
          phone: [
            {required: true, validator: checkPhone, trigger: 'blur' }
          ],
          assestid:[
            {required:true}
          ],
          unit:[
            {required:true}
          ],
          duty:[
            {required:true}
          ],
          goodat:[
            {required:true}
          ]
        }
      };
    },
    components:{
      'home':Home
    },
    methods: {
      submitForm(formName) {
       
      const axios =require('axios');
      axios.get('/api/add/professor/'+this.userinfo.phone+'/'+this.userinfo.name+'/'+this.userinfo.idcard+'/'+this.userinfo.assestid+'/'+this.userinfo.unit+'/'+this.userinfo.duty+'/'+this.userinfo.goodat)
      .then(function(response){
        console.log(response.data.success)
        console.log(response)
      })
      .then(function(error){
        console.log(error)
      })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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

