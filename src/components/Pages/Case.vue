<template>
    <div>
        <ab-header></ab-header>
         <el-tabs v-model="activeName" @tab-click="handleClick" class="tag">
            <el-tab-pane label="民事纠纷" name="first"><ab-caseone></ab-caseone></el-tab-pane>
            <el-tab-pane label="刑事纠纷" name="second"><ab-casetwo></ab-casetwo></el-tab-pane>
            <el-tab-pane label="生活琐事" name="third"><ab-casethree></ab-casethree></el-tab-pane>
         </el-tabs>
        <ab-footer></ab-footer>
    </div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
import CaseOne from '@/components/Base/Case-one'
import CaseTwo from '@/components/Base/Case-two'
import CaseThree from '@/components/Base/Case-three'
export default {
    data(){
        return{
             activeName: 'second'
        }
    },
    components:{
      'ab-header':Header,
      'ab-footer':Footer,
      'ab-caseone':CaseOne,
      'ab-casetwo':CaseTwo,
      'ab-casethree':CaseThree,
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
}
</script>

<style scoped>
.border{
    margin: auto;
    width: 1000px;
}
.tag{
    margin: auto;
    width: 996px;
}

</style>
