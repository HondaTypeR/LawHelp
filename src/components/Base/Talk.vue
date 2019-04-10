<template>
<div>
  <ab-header></ab-header>
        <div>
            <img src="@/assets/beijing.jpg" class="img">
        </div>
        <div class="float">
            <img :src="imgName" class="muchimg">
            <span class="name">{{name}}</span>
            <span class="post">{{duty}}</span>
            <span class="unit">{{unit}}</span>
            <span class="goodat">证件 | 擅长</span>
            <span class="about">证件号:</span>
            <span class="gmsg">{{assestid}}</span>
            <span class="phone">手机:</span>
            <span class="phones">{{phone}}</span>
            <span class="email">邮箱:</span>
            <span class="emails">{{email}}</span>
            <span class="address">地址:</span>
            <span class="addresss">{{address}}</span>
            <span class="good">擅长:</span>
            <span class="amsg">{{goodat}}</span>
            <span class="grade">评分</span>
            <el-rate
            class="grades"
             v-model="value"
             disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
            </el-rate>
              <el-button type="success" class="money" @click="dialogVisibles = true">付费咨询</el-button>
                                      <el-dialog
                                        title="付费咨询"
                                        :visible.sync="dialogVisibles"
                                        width="30%"
                                        :before-close="handleClose">
                                        <span>本次咨询将会在您的余额数量中扣除1</span>
                                        <span slot="footer" class="dialog-footer">
                                          <el-button @click="dialogVisibles = false">取 消</el-button>
                                          <el-button type="primary" @click="goto">确 定</el-button>
                                        </span>
                                      </el-dialog>
        </div>
        <div>
            <div class="none">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="提问" name="first" class="one"><ab-talkOne></ab-talkOne></el-tab-pane>
                    <el-tab-pane label="推荐" name="second"><ab-proquestion></ab-proquestion></el-tab-pane>
                    <el-tab-pane label="关注" name="third"><ab-hot></ab-hot></el-tab-pane>
                </el-tabs>
            </div>
        </div>
</div>
</template>

<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
import TalkOne from '@/components/Base/Talk-one.vue'
import Hot from '@/components/Base/Hot.vue'
import ProQuestion from '@/components/Base/ProQuestion.vue'
export default {
    name:'Talk',
    data(){
        return {
           imgName:'',
           balance:'',
           dialogVisibles: false,
           activeName: 'second',
           name:'',
           unit:'',
           duty:'',
           goodat:'',
           assestid:'',
           value: '',
           address:'',
           email:'',
           phone:'',
           temp:''
      };
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer,
        'ab-talkOne':TalkOne,
        'ab-hot':Hot,
        'ab-proquestion':ProQuestion,
    },
    beforeCreate:function(){
    this.$axios.get('/api/find/hotprofessor/'+JSON.parse( localStorage.getItem("temp"))+'/'+JSON.parse( localStorage.getItem("typeId")))
    .then((res)=>{
       console.log(res)
       debugger
       this.name=res.data[0].name;
       this.duty=res.data[0].duty;
       this.unit=res.data[0].unit;
       this.goodat=res.data[0].goodat;
       this.assestid=res.data[0].assestid;
       this.value=res.data[0].value;
       this.address=res.data[0].address;
       this.email=res.data[0].email;
       this.phone=res.data[0].phone;
       var xx=res.data[0].phone;
       this.temp=xx
        this.$axios.get('/api/find/imgpath/'+this.temp)
       .then((res)=>{
        var x = 'http://39.107.75.95:8080/fileoo/'
        this.imgName=x+res.data[0].fileName
        console.log(this.imgName)
      })
       
    })
  },
  methods:{
      goto(){
       this.$axios.get("/api/find/userinfos/"+JSON.parse( localStorage.getItem("data")))
      .then((res)=>{
       this.balance=res.data.result[0].balance;
       var tem=res.data.result[0].balance;
       if(tem<=0){
         alert("您的余额不足，请充值")
       }else{
        this.balance=this.balance-1;
        this.$axios.get('/api/update/balance/'+this.balance+'/'+JSON.parse( localStorage.getItem("data")))
        this.$router.push({path:'/OneToOne'})
        this.dialogVisibles=false;
       }
     })
        

      }
  }
    
}
</script>

<style scoped>
.img{
    width: 1500px;
    height: 400px
}
.float{
    position: absolute;
    top: 80px;
    left: 200px;
}
.name{
    font-size: 23px;
    position: absolute;
    top: 15px;
    left: 250px;
    width: 71px;
}
.post{
    position: absolute;
    top: 18px;
    left: 350px;
    width: 100px;

}
.unit{
    position: absolute;
    top: 58px;
    left: 250px;
    width: 100px;
}
.goodat{
    width: 100px;
    position: absolute;
    left: 465px;
    top: 124px;
    font-size: 20px
}
.about{
    position: absolute;
    top: 174px;
    left: 138px;
    font-size: 17px;
    width: 65px;
}
.gmsg{
    width: 1025px;
    position: absolute;
    left: 200px;
    top: 174px;
}
.good{
    font-size: 17px;
    position: absolute;
    left: 138px;
    top: 229px;
    width: 50px;
}
.amsg{
    position: absolute;
    width: 1000px;
    left: 198px;
    top: 230px;
}
.none{
    height: 40px;
    background-color: #05b605;
    margin-top: 10px;
    margin-bottom: 10px;
}
.grades{
    position: absolute;
    left: 180px;
    width: 400px;
    top: 269px;
}
.grade{
    position: absolute;
    left: 138px;
    top: 269px;
    width: 50px;
}
.phone{
    position: absolute;
    top: 175px;
    left: 580px;
    width: 40px;
}
.phones{
    position: absolute;
    top: 175px;
    left: 620px;
}
.email{
    position: absolute;
    top: 229px;
    left: 580px;
    width: 37px;
}
.emails{
    position: absolute;
    top: 230px;
    left: 620px;
}
.address{
    position: absolute;
    top: 268px;
    width: 40px;
    left: 580px;
}
.addresss{
    position: absolute;
    top: 268px;
    left: 620px;
    width: 320px;
}
.money{
    position: absolute;
    left: 430px;
    top: 39px;
}
.muchimg{
    width: 130px;
    border-radius: 16px;
    position: absolute;
    left: 100px;
}
</style>
<style>
.el-tabs__item {
    padding: 0 50px !important;
    font-size: 24px!important
}
</style>

