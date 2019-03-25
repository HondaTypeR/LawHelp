<template>
  <div>
      <el-carousel :interval="4000" type="card" height="35  0px">
      <el-carousel-item v-for="item in imgList" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      <h3><img :src="item" alt=""> </h3>
      </el-carousel-item>
      </el-carousel>
  </div>
</template>
<script>
export default {
    name:'Carousel',
    data(){
        return{
          imgList:[
            require('../../../static/images/test.png'),
            require('../../../static/images/test2.png'),
            require('../../../static/images/home1.jpg'),
            require('../../../static/images/home4.jpg'),
            require('../../../static/images/home5.jpg'),
            require('../../../static/images/home6.jpg')
          ],
        }
    }
}
</script>

<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
