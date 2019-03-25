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
