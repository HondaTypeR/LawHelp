<template>
  <div>
      <span>测试</span>
      <button @click="submit">submit</button>
      <button @click="submited">submited</button>
      <button @click="local">local</button>
      <input type="text">
      
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
            userId:2
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
        }
    }
}
</script>

<style>

</style>
