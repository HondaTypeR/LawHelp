<template>
  <div>
      <el-container>
          <el-header>
              <ab-header></ab-header>
          </el-header>
          <el-main>
              <ab-body></ab-body>
          </el-main>
          <el-footer>
              <ab-footer></ab-footer>
          </el-footer>
      </el-container>
  </div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Body from '@/components/Const/Body.vue'
import Footer from '@/components/Const/Footer.vue'
export default {
    name: 'Home',
    data () {
    return {
     
     }
     },
    components:{
      'ab-header':Header,
      'ab-body':Body,
      'ab-footer':Footer,
  }
}
</script>

<style scoped>

</style>
