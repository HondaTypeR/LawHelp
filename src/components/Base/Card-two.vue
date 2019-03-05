<template>
  <el-row>
  <el-col :span="5" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 2">
       <br>
    <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/role2.jpg" class="image">
      <div style="padding: 14px;">
        <span>法学专家</span>
        <div class="bottom clearfix">
          <span>这位是专业的律师</span>
          <router-link to="/Talk"> <el-button type="text" class="button">点击交流</el-button></router-link>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
    name:'Cards',
    data() {
    return {
    
    };
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
