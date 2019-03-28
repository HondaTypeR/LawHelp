<template>
  <div>
      <el-container>
          <el-header>
              <ab-header></ab-header>
          </el-header>
          <el-main>
                <h1 class="steptitle">我的待办</h1>   <h3 v-show="isnot">您当前没有待办事项</h3>
                <p class="stepres" v-show="failed">驳回原因:{{notpassRes}}</p>
                <div class="borders" v-show="ishas">
                        <el-steps :space="200" :active="num" finish-status="success" class="steps" align-center>
                        <el-step title="发起申请" description="信息审核开始"></el-step>
                        <el-step title="处理中" description="信息审核中，请耐心等待"></el-step>
                        <el-step title="已完成" description="信息审核完成"></el-step>
                        </el-steps>
                        <div class="mines">
                            <div style="margin-top:20px">
                            <span class="stepab">姓名:{{name}}</span>
                            <span class="stepab">身份证号:{{idcard}}</span>
                            <span class="stepab">证件号:{{assestid}}</span>
                            </div>
                            <div style="margin-top:30px">
                            <span class="stepab">单位:{{unit}}</span>
                            <span class="stepab">职位:{{duty}}</span>
                            <span class="stepab">擅长:{{goodat}}</span>
                            </div>
                            <div style="margin-top:30px">
                            <span class="stepab">手机号:{{phone}}</span>
                            <span class="stepab">邮箱:{{email}}</span>
                            </div>
                            <p class="stepab">地址:{{address}}</p>
                        </div>
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
    name: 'Step',
    data () {
      return {
          name:'',
          idcard:'',
          assestid:'',
          unit:'',
          duty:'',
          goodat:'',
          phone:'',
          email:'',
          address:'',
          status:'',
          notpassRes:'',
          ishas:true,
          isnot:false,
          failed:false,
          num:0
          }
     },
    components:{
      'ab-header':Header,
      'ab-footer':Footer,
  },
  created:function(){
    this.$axios.get('/api/find/professors/'+JSON.parse( localStorage.getItem("data")))
    .then((res)=>{
        if(res.data.length>0){
            this.num=1
        if('Y'==res.data[0].active){
            this.failed=true
            this.num=2
        }
        debugger
        console.log(res)
        this.name=res.data[0].name
        this.idcard=res.data[0].idcard
        this.assestid=res.data[0].assestid
        this.unit=res.data[0].unit
        this.duty=res.data[0].duty
        this.goodat=res.data[0].goodat
        this.phone=res.data[0].phone
        this.email=res.data[0].email
        this.address=res.data[0].address
        this.notpassRes=res.data[0].notpassRes
     }else{
         this.isnot=true;
         this.ishas=false
     }
    })
  },
   methods: {
    
   }
}
</script>

<style scoped>
.el-autocomplete{
  width: 500px;
  margin-left: 350px;
  margin-bottom: 38px;
}
.el-button{
  font-size: 13px
}
.box{
  width: 555px;
  float: left;
  margin-left: 350px;
  margin-bottom: 46px;
}
.logo{
  float: left;
}
img.thisimg {
    border: ridge;
    border-radius: 35px;
    padding: 3px;
    margin-top: 15px;
}
.thiserach{
   margin: 10px
}
.borders{
    border: 2px solid orange;
    height: auto;
    min-height: 500px;
    background-color: whitesmoke;
    border-radius: 5px;
}
.steptitle{
    background-color: #6EB14A;
    width: 100px;
    border: 2px solid orange;
    border-radius: 5px;
    padding: 10px;
    color: white
}
.steps{
    margin: auto;
    width: 600px;
    padding: 20px;
}
.mines{
    height: auto;
    min-height: 330px;
    border: 1px solid #50ff08;
    margin: 30px;
    background-color: white;
}
.stepab{
    font-size: 25px;
    border: 1px solid orange;
    margin: 60px;
    border-radius: 5px;
    background-color: wheat;
    padding: 5px;
}
.stepres{
    font-size: 25px;
    border: 1px solid orange;
    margin: 60px;
    border-radius: 5px;
    background-color: rgb(253, 8, 8);
    padding: 5px;
}
</style>
