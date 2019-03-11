<template>
    <div>
         <ab-header></ab-header>
         <div>
             <el-row>
                <el-col :span="16">
                    <div class="left grid-content bg-purple-dark ">
                        <div class="boxHeader" v-for="item in messages">
                            <h2>{{item.title}}</h2>
                             <p>{{item.details}}</p>
                            <el-badge :value="200" :max="99" class="item">
                            <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge :value="100" :max="10" class="item">
                            <el-button size="small">回复</el-button>
                            </el-badge>
                            <el-badge  class="item">
                            <el-button size="small">{{item.type}}</el-button>
                            </el-badge>
                             <el-badge class="date">
                             <p>{{item.createdate}}</p>
                             </el-badge>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="right grid-content bg-purple-dark" >
                </div></el-col>
            </el-row>
         </div>
         <ab-footer></ab-footer>
    </div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
export default {
    data(){
        return{
            messages:[],
        }
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer,
    },
    created:function(){
      this.$axios.get("/api/find/questions")
      .then((res)=>{
        var respon =res.data;
        this.messages=respon
        console.log(this.messages)
      })
    },
   
}
</script>

<style scoped>
.left.grid-content.bg-purple-dark {
    width: 930px;
    height: auto;
    min-height: 600px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 25px
}
.right.grid-content.bg-purple-dark {
    border: 1px solid black;
    width: 496px;
    height: auto;
    min-height: 600px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.boxHeader {
    border-bottom: 1px solid #409EFF;
    height: 180px;
    width: 930px;
    border-top: 1px solid #409EFF;
    background-color: whitesmoke;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-badge.date {
    float: right;
    margin-right: 165px;
}
</style>
