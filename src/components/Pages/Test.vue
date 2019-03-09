<template>
  <div>
      <span>测试</span>
      <button @click="submit">submit</button>
      <button @click="submited">submited</button>
      <button @click="local">local</button>
      <input type="text">
      <el-button type="text" v-show="this.flag">点击打开 Message Box</el-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:'gf',
            password:'54',
            phone:55,
            role:1,
            userId:2,
            flag:false,
        }
    }, 
    methods:{
        submit(){
               const axios = require('axios');
               axios.get('http://jsonplaceholder.typicode.com/posts?',{
                   params:{
                       userId :this.userId
                   }
               })
               .then(function (response) {
                 console.log(response.data);
                 })
             .catch(function (error) {
                 console.log(error);
                 })
    
        },
        submited(){
            this.flag=true
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
         sss() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
}
</script>

<style>

</style>
