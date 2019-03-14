<!--父组件中引入子组件-->
<template>
  <div>
    <a href="javascript:;" @click="$store.state.dialog.show = true">点击</a>
    <t-dialog :show.sync="show"></t-dialog>
  </div>
</template>

<script>

export default {
  data(){
    return {



    }
  },
  components:{

  },
 created(){
   var a= JSON.parse( localStorage.getItem("data")); 
   console.log(a)
  }
}
</script>



