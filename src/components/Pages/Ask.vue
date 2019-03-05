<template>
  <div>
      <div class="header">
            <img src="@/assets/ask.png" class="image">
            <span class="title">亲，您来快速问医生，是想叫医生帮你解决什么呢？</span>
            <router-link to="/"> <el-button type="success" size="mini" style="margin-bottom:10px;margin-left:180px">首页</el-button></router-link>
      </div>
      <div class="body">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <el-form-item label="标题 ：" prop="name">
             <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="详情 ：" prop="textarea">
           <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
          </el-form-item>
          <el-form-item label="区域 ：">
            <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="问题分类 ：" >
             <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="手机号码 ：" >
             <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
             <el-button type="success" @click="submitForm('ruleForm')">发起提问</el-button>
             <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
</el-form>
      </div>
      <div class="footer">
        <p class="copy">Copyright © 2004-2017, 120ASK.COM, All Rights Reserved </p>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
           name: '',
           textarea: '',
           input: ''
        },
        rules: {
          name: [
            { required: true, message: '请填写标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
          textarea: [
            { required: true, message: '请填写详情', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
         options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
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
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
  }
</script>


<style scoped>
.header{
    width: 100%;
    max-width: 1500px;
    border-bottom: 3px solid #6eb14a
}
.image{
    width: 200px;
    height: 100px;
    margin-left: 100px
}
.title{
    font-size: 25px;
    color: #6eb14a;
    margin-left: 160px;
    bottom: 30px
}
.body{
    width: 600px;
    margin-left: 300px;
    margin-top: 50px
}
.footer{
    border-top: 2px solid gray;
}
.copy{
        margin-left: 550px
}
.el-cascader .el-input, .el-cascader .el-input__inner {
    width: 323px;
}
.el-input{
    width: 323px
}
</style>
