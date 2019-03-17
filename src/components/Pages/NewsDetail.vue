<template>
  <div>
       <el-container>
          <el-header>
              <ab-header></ab-header>
          </el-header>
          <el-main>
              <h1 class="title">{{title}}</h1>
              <p class="time">2019-05-04</p>
              <div class="message">
                  <p class="content">{{content}}</p>
              </div>
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
export default {
    data(){
        return{
           title:'',
           content:''
        }
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer,
    },
    created:function(){
         this.$axios.get('/api/find/newsById/'+JSON.parse( localStorage.getItem("newsID")))
        .then((res)=>{
            var respon = res.data[0]
            console.log(respon.title)
            this.title=respon.title;
            this.content=respon.content;
        })
    }
}
</script>

<style scoped>
.title{
    text-align: center;
}
.content{
    text-indent:2em;
    text-align: center;
    background-color: wheat;
}
.message {
    width: 550px;
    position: relative;
    left: 423px;
}
.time{
    text-align: center;
    color: blue  
}
</style>
