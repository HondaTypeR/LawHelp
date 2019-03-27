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
  <h3 class="addtitle">充值中心</h3>
   <span class="money">充值金额:</span>
   <el-input-number v-model="num3" :step="1" :min="1"></el-input-number>
      <el-button type="primary" @click="addmoney">确认充值</el-button>
   <img class="moneyimg" src="@/assets/money.jpg">
  </div>
  </div>
</template>
<script>
export default {
    name:'News',
    data(){
        return{
            news:[],
            num3: 5
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
      },
      addmoney(){
          this.$axios.get('/api/update/balance/'+this.num3+'/'+JSON.parse( localStorage.getItem("data")))
          .then((res)=>{
          this.$notify({
          title: '充值成功',
          message: '请刷新您的账户余额',
          type: 'success'
        });
          })
      }
    }
}
</script>

<style scoped>
.border{
    width: 95%;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    background-color: whitesmoke;
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
    height: 349px;
    margin-top: 38px;
    background-color: aliceblue;
}
.addtitle{
    text-align: center
}
.money{
    margin-left: 40px
}
.moneyimg{
    height: 213px;
    width: 326px;
    margin-top: 20px;
    margin-left: 50px;

}
</style>
