<template>
  <div>
      <span>测试</span>
      <button @click="submit">submit</button>
      <el-alert
    title="设置了回调的 alert"
    type="warning"
    @close="submit">
  </el-alert>
      <button @click="submited">submited</button>
      <button @click="local">local</button>
      <input type="text">
      <p type="text" @click="open3">点击打开 Message Box</p>


        <el-col :span="8">
    <el-card shadow="always">
      总是显示
    </el-card>
  </el-col>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            username:'gf',
            password:'54',
            phone:55,
            role:1,
            userId:2,

        }
    }, 
    components:{
        'home':Home
    },
    methods:{
       open3() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },  
        submit(){
          this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({path: 'home'});
          }
        });
      
               const axios = require('axios');
               axios.get('http://jsonplaceholder.typicode.com/posts?',{
                   params:{
                       userId :this.userId
                   }
               })
               .then(function (response) {
               
                 })
             .catch(function (error) {
                 console.log(error);
                 })
                  
    
        },
        
        submited(){
            const axios = require('axios');
            axios.post('http://jsonplaceholder.typicode.com/posts',{
               user:this.user
            })
            .then(function (response) {
            
            console.log(response);
            
             })
             .catch(function (error) {
             console.log(error);
            });
    },
        local(){
            console.log(this.username)
            const axios = require('axios');
            axios.get('/api/add/user/'+this.username+'/'+this.password+'/'+this.phone+'/'+this.role)
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error);
            })
        },
        
    },
    created:{
      
    }
}
</script>

<style>

</style>
