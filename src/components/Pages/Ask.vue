<template>
  <div>
      <div class="header">
            <img src="@/assets/ask.png" class="image">
            <span class="title">亲，您来快速问医生，是想叫医生帮你解决什么呢？</span>
            <router-link to="/"> <el-button type="success" size="mini" style="margin-bottom:10px;margin-left:180px">首页</el-button></router-link>
      </div>
      <div class="body">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <el-form-item label="标题 ：" prop="title">
             <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="详情 ：" prop="details">
           <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="ruleForm.details">
          </el-input>
          </el-form-item>
          <el-form-item label="省份(可选)：" prop="province">
            <el-select placeholder="建议填写,方便为您解答" v-model="ruleForm.province" >
               <el-option v-for="(item,index) in provinces" :value="item.province">{{item.province}}</el-option>
             </el-select>
          </el-form-item>
          <el-form-item label="城市(可选) ：">
            <el-select placeholder="建议填写,方便为您解答" v-model="ruleForm.city" no-data-text="请先选择省份">
               <el-option v-for="(item,index) in citys" :value="item.city">{{item.city}}</el-option>
             </el-select>
          </el-form-item>
          <el-form-item label="问题分类: " prop="type">
              <el-select placeholder="请选择类型" v-model="ruleForm.type">
                       <el-option label="民事" value="民事"></el-option>
                       <el-option label="刑事" value="刑事"></el-option>
                       <el-option label="琐事" value="琐事"></el-option>
             </el-select>
         </el-form-item>
          <el-form-item label="手机号码 ：" prop="phone">
             <el-input v-model.number="ruleForm.phone" placeholder="请输入内容" maxlength="11"></el-input>
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
        },100);
      };
      return {
        ruleForm: {
        title:"",
        details:'',
        type:'',
        phone:'',   
        province:'',
        city:'',
        },
        provinces:[],
        citys:[],
        rules: {
          title: [
            { required: true, message: '请填写标题', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
            ],
          details: [
            { required: true, message: '请填写详情', trigger: 'blur' },
            { min: 3, max: 105, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone:[
            {required:true,validator: checkPhone, trigger: 'blur'},
          ],
          type:[
            {required:true, trigger: 'blur'}
          ],
          city:[
            {required:false,trigger:'blur'}
          ],
          province:[
            {required:false,trigger:'blur'}
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios({
          method:"post",
          url:"/api/add/question",
          data:{
            title:this.ruleForm.title,
            details:this.ruleForm.details,
            phone:this.ruleForm.phone,
            type:this.ruleForm.type,
            province:this.ruleForm.province
          }
        }).then((res)=>{
          console.log(res.data)
          this.$router.push({path:'/Success'})
        })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getCitys(){
      this.ruleForm.city='';
      this.$axios.get('/api/find/city/'+this.ruleForm.province)
      .then((res)=>{
        var responcity= res.data.result;
        this.citys=responcity
        console.log(responcity)
      })
      }
    },
    created:function(){
      this.$axios.get("/api/find/province")
      .then((res)=>{
        var respon =res.data.result;
        this.provinces=respon
        console.log(respon)
      })
      
     
    },
    computed:{
     province(){
       return this.ruleForm.province
     }
    },
    watch:{
    // ruleForm:{
    //   handler(val,newval){
    //   console.log(newval)
    //   },
    // deep:true
    // }
    
    province(newval,oldval){
      console.log(newval)
      var temp=newval
      this.getCitys();
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
