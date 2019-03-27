<template>
    <div>
        <ab-header></ab-header>
       <router-link to="/Case"> <el-button type="primary" icon="el-icon-back" circle class="back"></el-button></router-link>
         <el-card class="border">
             <h1 class="title">{{title}}</h1>
             <p class="time">{{time}}</p>
              <img :src="imgs" class="img">
             <p class="details">{{details}}</p>
         </el-card>
        <ab-footer></ab-footer>
    </div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
export default {
    data(){
        return{
             activeName: 'second',
             title:'',
             time:'',
             details:'',
             imgs:''
        }
    },
    components:{
     'ab-header':Header,
     'ab-footer':Footer,
     },
     created: function(){
         this.$axios.get('/api/find/case/'+JSON.parse( localStorage.getItem("caseId")))
         .then((res)=>{
             console.log(res.data)
             this.title=res.data[0].title;
             this.time=res.data[0].time;
             this.details=res.data[0].detailes;
             this.imgs=res.data[0].imgs;
         })
     }
}
</script>

<style scoped>
.border{
    margin: auto;
    width: 1000px;
}
.title{
    text-align: center
}
.details{
    padding-left: 50px;
    padding-right: 50px;
    text-indent: 2em;
}
img{
    margin-left: 10px;
    float: right;
    margin-right: 50px;
}
.time{
    text-align: center
}
.back{
    margin-top: 20px;
    margin-left: 20px;
}
.el-card.border.is-always-shadow {
    margin-bottom: 50px;
}
</style>
