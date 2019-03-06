<template>
<div>
  <div class="askform">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="题目" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>    
                <el-form-item label="内容" prop="name">
                    <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </el-form-item>       
                <el-form-item label="手机号码 ：" >
                     <el-input v-model="input" placeholder="请输入内容"></el-input>
                 </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                </el-form>  
   </div>
    <ab-footer></ab-footer>
    </div>
</template>

<script>
import Footer from '@/components/Const/Footer.vue'
export default {
    data(){
        return{
          ruleForm: {
          name: '',
        
        },
         textarea:'',
         input:'',
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
        }
    },
    components:{
        'ab-footer':Footer
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
      }
    }
}
</script>

<style scoped>
.askform{
    width: 500px;
    padding-left: 200px;
}
</style>
