<template>
  <el-row>
  <el-col :span="5" v-for="(item,index) in infos"  :key="item.phone" :offset="index > 0 ? 2 : 2">
       <br>
       <div >
    <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/role4.jpg" class="image">
      <div style="padding: 14px;">
        <el-tag type="danger">  <span>{{item.name}}</span></el-tag>
        <div class="bottom clearfix">
          <el-tag type="success">  <span>{{item.unit}}</span></el-tag>
          <el-tag type="success">   <span>{{item.duty}}</span></el-tag>
          <el-tag type="success"><span>{{item.goodat}}</span></el-tag>
          <router-link to="/Talk"> <el-button type="text" class="button" @click="getDetails(item.phone)">点击交流</el-button></router-link>
        </div>
      </div>
    </el-card>
    </div>
  </el-col>
</el-row>
</template>

<script>
export default {
    name:'Cards',
    data() {
    return {
    infos:[],
    };
  },
  created:function(){
    this.$axios.get('/api/find/hotprofessor/'+3)
    .then((res)=>{
      this.infos=res.data
       console.log(this.infos)
    })
  },
  methods:{
    getDetails(phone){
       var bl = phone
       console.log(bl)
       localStorage.setItem('temp',JSON.stringify(phone));
       localStorage.setItem('typeId',JSON.stringify(3))
    }
  }
}
</script>

<style scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
