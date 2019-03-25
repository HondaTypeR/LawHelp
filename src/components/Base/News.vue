<template>
  <div style="box">
      <div style="width:70%;float:left">
  <el-tabs>
    <el-tab-pane label="时事新闻">
        <div class="border" v-for="(item,index) in news">
         <router-link to="/NewsDetail">  <li> <span @click="getIndex(index)">{{item.title}}</span></li></router-link>
        </div>
    </el-tab-pane>
  </el-tabs>
  </div>
  <div class="box-right">
  待加载数据
  </div>
  </div>
</template>
<script>
export default {
    name:'News',
    data(){
        return{
            news:[]
        }
    },
    created: function(){
        this.$axios.get('/api/find/news')
        .then((res)=>{
            var respon = res.data
            console.log(respon)
            this.news=respon
        })
    },
    methods:{
         getIndex(index){   
             console.log(index)    
            localStorage.setItem('newsID',JSON.stringify(index))
          
      }
    }
}
</script>

<style scoped>
.border{
    width: 95%;
    height: auto;
    border-radius: 10px;
    padding: 20px
}
li{
    padding-bottom: 6px
}
.box{
    width: 100%;
    flex-direction: row;
}
.box-right{
    float: right;
    width: 29%;
    border: 1px solid gainsboro;
    height: 300px;
 
}
</style>
