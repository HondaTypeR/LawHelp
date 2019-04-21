<template>
  <div>
     <el-select placeholder="请选择类型" v-model="userinfo.type" class="types">
                       <el-option label="民事纠纷" value="1"></el-option>
                       <el-option label="刑事纠纷" value="2"></el-option>
                       <el-option label="生活琐事" value="3"></el-option>
             </el-select>
             <button @click="show()">show</button>
</div>
</template>
<script>
  export default {
    data() {
       return {
         userinfo: {
          type:''
        },
      };
    },
    components:{

    },
    methods: {
    show(){
      console.log(this.userinfo.type)
    }
  
  }
  }
</script>

<style scoped>

</style>

