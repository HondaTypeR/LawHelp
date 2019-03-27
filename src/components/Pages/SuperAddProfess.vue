<template>
   <div>
        <el-container>
            <el-header>
                <div class="border">
                    <h1 class="title">法律帮管理后台界面</h1>
                </div>
            </el-header>
            <el-main>
                <div class="body">
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content bg-purple left">
                                 <el-button class="buttons">添加新闻</el-button>
                                 <el-button class="buttons">认证专家</el-button>
                                 <el-button class="buttons">主要按钮</el-button>
                                 <el-button class="buttons">主要按钮</el-button>
                            </div>
                        </el-col>
                        <el-col :span="20">
                            <div class="grid-content bg-purple-light right">
                                <h1 class="NewsTitle">添加新闻</h1>
                                    <div class="askform">
                                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                                <el-form-item label="标题:" >
                                                    <el-input v-model="ruleForm.title" prop="title"></el-input>
                                                </el-form-item>    
                                                <el-form-item label="内容:" prop="msg">
                                                    <el-input
                                                        type="textarea"
                                                        :rows="5"
                                                        placeholder="请输入内容"
                                                        v-model="ruleForm.msg">
                                                    </el-input>
                                                </el-form-item>       
                                                <el-form-item label="是否热门:" prop="hot">
                                                    <el-radio v-model="ruleForm.hot" label="1">是</el-radio>
                                                    <el-radio v-model="ruleForm.hot" label="2">否</el-radio>
                                                </el-form-item>
                                                <el-form-item>
                                                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                                </el-form-item>
                                        </el-form>  
                                     </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-main>
            <el-footer>
                <div class="footer">
                    <h3 class="footers">@copy right 2019-03-27 法律帮版权所有</h3>
                </div>
            </el-footer>
        </el-container>
   </div>
</template>

<script>
export default {
    data(){
        return{
          ruleForm: {
          title: '',
          msg:'',
          hot:'2',
        },
         rules: {
          title: [
            { required: true, message: '请输入新闻内容', trigger: 'blur' },
          ],
          msg: [
            { required: true, message: '请输入新闻内容', trigger: 'blur' },
          ],
          hot: [
            { required: true, message: '请输入新闻内容', trigger: 'blur' },
          ],
         }
        }
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios({
               method:'post',
               url:'/api/add/news',
               data:{
                title:this.ruleForm.title,
                content:this.ruleForm.msg,
                hot:this.ruleForm.hot
               }
           }).then((res)=>{
            this.$notify({
            title: '添加成功',
            message: '您已添加新的内容',
            type: 'success'
            });
            this.ruleForm.title='',
            this.ruleForm.msg='',
            this.ruleForm.hot=''
           })
          } else {
            alert("添加失败")
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
.title{
     padding: 10px;
     text-align: center
}
.border{
    background-color:turquoise
}
.footer{
    background-color:turquoise
}
.footers{
     padding: 10px;
     text-align: center
}
.body{
    min-height: 500px;
    height: auto;
    max-height: 800px;
}
.left{
    width: 220px;
    background-color: turquoise;
    border-radius: 7px;
    min-height: 500px;
    height: auto;
    max-height: 800px;
    border: 5px solid yellow
}
.buttons{
    width: 200px;
    margin: 10px;
}
.right{
    background-color: whitesmoke;
    border-radius: 7px;
    border: 5px solid yellow;
    min-height: 500px;
    height: auto;
    max-height: 800px;
}
.NewsTitle{
    text-align: center
}
</style>
