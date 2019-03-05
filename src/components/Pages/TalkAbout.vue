<template>
  <div>
       <el-container>
          <el-header>
              <ab-header></ab-header>
          </el-header>
          <el-main>
             <ab-talkBody></ab-talkBody>
          </el-main>
          <el-footer>
              <ab-footer></ab-footer>
          </el-footer>
      </el-container>
  </div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
import TalkBody from '@/components/Base/TalkBody.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer,
        'ab-talkBody':TalkBody
    }
}
</script>

<style scoped>

</style>
