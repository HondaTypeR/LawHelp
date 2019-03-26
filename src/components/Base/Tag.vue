<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="民事纠纷" name="first"><ab-card1></ab-card1></el-tab-pane>
    <el-tab-pane label="刑事纠纷" name="second"><ab-card2></ab-card2></el-tab-pane>
    <el-tab-pane label="生活琐事" name="third"><ab-card3></ab-card3></el-tab-pane>
  </el-tabs>
</template>
<script>
import Card1 from '@/components/Base/Card-one.vue'
import Card2 from '@/components/Base/Card-two.vue'
import Card3 from '@/components/Base/Card-three.vue'
  export default {
    name:'Tag',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        'ab-card1':Card1,
        'ab-card2':Card2,
        'ab-card3':Card3,
    }
  };
</script>
<style>

</style>
