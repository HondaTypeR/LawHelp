<template>
  <div>
      <div class="box">
          <p class="title">有哪些不起眼却非常赚钱的行业？</p>
          <p class="message">匿名用户： 我是芒果台某工作室的美编，有幸刚毕业就进了芒果台工作，当时真的开心死了。现在工作了快三年了，没日没夜地工作，当时的工作热情快被消磨光了。</p>
     <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
            </el-badge>
            <el-badge :value="1" class="item" type="primary">
            <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="2" class="item" type="warning">
            <el-button size="small">回复</el-button>
            </el-badge>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.box{
    width: 1000px;
    max-width: 1200px;
    height: 300px;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray
}
.title{
    font-size: 25px
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
