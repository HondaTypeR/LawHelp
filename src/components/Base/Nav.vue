<template>
<div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#FFF"
  text-color="#191612"
  active-text-color="#85CE61">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2" class="che">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled >消息中心</el-menu-item>
  <el-menu-item index="4"  ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</div>
</template>
<script>
  export default {
    name:'Nav',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-menu.el-menu--horizontal {
    border-bottom: solid 5px #85CE61;
    border-top: solid 1px #e6e6e6;
    margin-bottom: 20px;
}
</style>
