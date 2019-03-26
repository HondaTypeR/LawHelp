<template>
  <div>
      <ab-header></ab-header>
      <div class="form">
        <div class="back">
              <h2 class="title">认证专家</h2>
        </div>
        <div class="box-left">
        <el-form :model="userinfo" status-icon :rules="rules2" ref="userinfo" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号" prop="phone">
            <el-input class="user" v-model.number="userinfo.phone" placeholder="注册的手机号将作为您的登陆手机号" maxlength="11"></el-input>
        </el-form-item>
          <el-form-item label="真实姓名" prop="name">
            <el-input class="user" type="name" v-model="userinfo.name" ></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
            <el-input class="user" type="idcard" v-model="userinfo.idcard" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="工作地址" prop="address">
            <el-input class="user" type="address" v-model="userinfo.address" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="邮箱" prop="email">
            <el-input class="user" type="email" v-model="userinfo.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="个人标签" prop="types" class="rightfive">
            <el-select placeholder="请选择类型" v-model="userinfo.type" class="types">
                       <el-option label="民事纠纷" value="1"></el-option>
                       <el-option label="刑事纠纷" value="2"></el-option>
                       <el-option label="生活琐事" value="3"></el-option>
             </el-select>
        </el-form-item>
       <el-form-item label="证件号" prop="assestid" class="rightone">
            <el-input class="user" type="assestid" v-model="userinfo.assestid" autocomplete="off" placeholder="至少8位以上数字"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="unit" class="righttwo">
            <el-input class="user" type="unit" v-model="userinfo.unit" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="职称" prop="duty"  class="rightthree">
            <el-input class="user" type="duty" v-model="userinfo.duty" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="擅长" prop="goodat" class="rightfour">
            <el-input class="user" type="goodat" v-model="userinfo.goodat" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('userinfo')">提交</el-button>
            <el-button @click="resetForm('userinfo')">重置</el-button>
        </el-form-item>
        </el-form>
        </div>
        
      </div>
      <ab-footer></ab-footer>
</div>
</template>
<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
import Home from '@/components/Home.vue'
import { error, callbackify } from 'util';
  export default {
    name:'Regin',
    data() {
      //正则验证手机号
      var TEL = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      var NAME = /^([\u4e00-\u9fa5]){2,7}$/;
      var IDCARD = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;  
      var Assestid = /^\d{8,}$/;
      var UNIT = /^[\u4e00-\u9fa5]{2,}$/;
      var DUTY = /^[\u4e00-\u9fa5]{2,}$/;
      var GOODAT =/^[\u4e00-\u9fa5]{2,}$/;
      var EMAIL = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
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
      var checkName = (rule, value, callback) =>{
        if(!NAME.test(value)){
          callback(new Error('请输入正确的姓名'))
        }else{
          callback();
        }
      };
      var checkIdcard = (rule,value,callback)=>{
        if(!IDCARD.test(value)){
          callback(new Error('身份证格式有误'))
        }else{
          callback();
        }
      };
      var checkAssestid=(rule,value,callback)=>{
        if(!Assestid.test(value)){
          callback(new Error('证件号格式有误'))
        }else{
          callback();
        }
      };
      var checkUnit=(rule,value,callback)=>{
        if(!UNIT.test(value)){
          callback(new Error('输入格式有误'))
        }else{
          callback();
        }
      };
      var checkDuty=(rule,value,callback)=>{
        if(!DUTY.test(value)){
          callback(new Error('输入格式有误'))
        }else{
          callback();
        }
      };
      var checkGoodat = (rule,value,callback)=>{
        if(!GOODAT.test(value)){
             callback(new Error('输入格式有误'))
          }else{
          callback();
        }
      };
      var checkEmail = (rule,value,callback)=>{
        if(!EMAIL.test(value)){
          callback(new Error('邮箱格式有误'))
        }else{
          callback();
        }
      }
       return {
         userinfo: {
          name:'',
          idcard: '',
          phone: '',
          assestid:'',
          unit:'',
          duty:'',
          goodat:'',
          address:'',
          email:'',
          type:''
        },
        rules2: {
          name:[
            {required:true,validator: checkName, trigger: 'blur'}
          ],
          idcard: [
            { required: true,validator: checkIdcard, trigger: 'blur'}
          ],
          phone: [
            {required: true, validator: checkPhone, trigger: 'blur' }
          ],
          assestid:[
            {required:true,validator: checkAssestid, trigger: 'blur'}
          ],
          unit:[
            {required:true,validator: checkUnit, trigger: 'blur'}
          ],
          duty:[
            {required:true,validator: checkDuty, trigger: 'blur'}
          ],
          goodat:[
            {required:true,validator: checkGoodat, trigger: 'blur'}
          ],
          address:[
            {required:true,trigger: 'blur'}
          ],
          email:[
            {required:true,validator: checkEmail,trigger: 'blur'}
          ],
          types:[
            {required:true,trigger: 'blur'}
          ]
        }
      };
    },
    components:{
      'home':Home
    },
    methods: {
      
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            //  if (valid) {
               
      const axios =require('axios');
      axios.get('/api/add/professor/'+this.userinfo.phone+'/'+this.userinfo.name+'/'+this.userinfo.idcard+'/'+this.userinfo.assestid+'/'+this.userinfo.unit+'/'+this.userinfo.duty+'/'+this.userinfo.goodat
                 +'/'+this.userinfo.address+'/'+this.userinfo.email+'/'+this.userinfo.type)
      .then(function(response){
        console.log(response.data.success)
        console.log(response)
        var flag= response.data.success
        if(flag==true){
         this.$router.push({path:"/Prosuccess"});
        }else{
          alert("该证件号已被验证，请确认")
        }
      }.bind(this))
      .then(function(error){
        console.log(error)
      })
      //  } else {
            console.log('error submit!!');
            return false;
          // }
        });
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
    font-size: 38px;
    color: blue;
    text-align: center
}
.back {
    background-color: bisque;
}
.rightone{
  position: absolute;
  top: 373px;
  left: 810px;
}
.righttwo{
    position: absolute;
    left: 810px;
    top: 155px;
}
.rightthree{
    position: absolute;
    left: 810px;
    top: 227px;
}
.rightfour{
    position: absolute;
    left: 810px;
    top: 300px;
}
.rightfive{
    position: absolute;
    left: 810px;
    top: 448px;
}
.types{
    margin-top: 10px;
}
</style>
<style>
.el-form-item__label{
    margin-top: 10px
}
</style>

