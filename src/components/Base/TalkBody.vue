<template>
  <div class="border">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="热门" name="first"><ab-hot></ab-hot></el-tab-pane>
        <el-tab-pane label="推荐" name="second">推荐</el-tab-pane>
        <el-tab-pane label="关注" name="third">关注</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Hot from '@/components/Base/Hot.vue'
export default {
    data(){
        return{
                activeName: 'second'    
        }
    },
    components:{
        'ab-hot':Hot
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
.border{
    width: 1500px;
    max-width: 1800px;
}
</style>
