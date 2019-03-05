<template>
<div>
  <ab-header></ab-header>
    <div class="box">
        
    </div>
  <ab-footer></ab-footer>
</div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
export default {
    name:'Talk',
    data(){
        return{

        }
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer
    }
}
</script>

<style scoped>
.box{
    width: 800px;
    height: 600px;
    border: 1px solid #6eb14a;
    margin-left: 330px;
    margin-top: 30px;
    margin-bottom: 30px
}
</style>
