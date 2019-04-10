<template>
  <el-row>
  <el-col :span="5" v-for="(item,index) in infos"  :key="item.phone" :offset="index > 0 ? 2 : 2">
       <br>
       <div >
    <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/role2.jpg" class="image">
      <div style="padding: 14px;">
        <el-tag type="danger">  <span>{{item.name}}</span></el-tag>
        <div class="bottom clearfix">
          <el-tag type="success">  <span>{{item.unit}}</span></el-tag>
          <el-tag type="success">   <span>{{item.duty}}</span></el-tag>
          <el-tag type="success"><span>{{item.goodat}}</span></el-tag>
          <router-link to="/Talk"> <el-button type="text" class="button" @click="getDetails(item.phone)">点击查看</el-button></router-link>
        </div>
      </div>
    </el-card>
    </div>
  </el-col>
</el-row>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        imgName:'',
         infos:[],
        phone:[]
      }
    },
    methods: {
      getDetails(phone){
       var bl = phone
       localStorage.setItem('temp',JSON.stringify(phone));
       localStorage.setItem('typeId',JSON.stringify(1))
    }
    },
    created:function(){
      this.$axios.get('/api/find/hotprofessor/'+1)
    .then((res)=>{
      this.infos=res.data
       for(var i=0;i<res.data.length;i++){
         this.phone.push(res.data[i].phone)
       }
       console.log(this.phone)
    })
      

      this.$axios.get('/api/find/imgpath/13079897299')
      .then((res)=>{
        console.log(this.phone[0])
        console.log(res.data)
        var x = 'http://39.107.75.95:8080/fileoo/'
        this.imgName=x+res.data[0].fileName
        console.log(this.imgName)
      })
    }
  }
</script>


<style>

</style>

