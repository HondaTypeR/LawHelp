<template>
  <div>
      <div class="header">
            <img src="@/assets/questions.png" class="image">
            <span class="title">亲，欢迎来到法律帮问题讨论区，请发表自己的看法吧</span>
            <router-link to="/"> <el-button type="success" size="mini" style="margin-bottom:10px;margin-left:180px">首页</el-button></router-link>
      </div>
      <div>
             <el-row>
                  <el-col :span="18">
                      <div class="left grid-content bg-purple-dark" v-for="item in messages">
                            <h1 class="titles">{{item.title}}</h1>
                 <el-card shadow="always">
                                     <el-badge  class="item">
                                        <span>问题类型:</span>
                                        <el-tag>{{item.type}}</el-tag>
                                     </el-badge>
                                 <p>问题描述：</p>
                            <div>
                                <p>{{item.details}}</p>
                            </div>
                            <el-badge  class="item">
                              <span>区域:</span>
                              <el-tag>{{item.province}}</el-tag>
                           </el-badge>
                           <el-badge  class="item">
                              <el-tag type="warning">{{item.city}}</el-tag>
                           </el-badge>
                           <el-badge  class="item">
                              <span style="margin-left: 60px">联系方式:</span>
                              <el-tag>{{item.phone}}</el-tag>
                           </el-badge>
                           <el-badge  class="item">
                              <span style="margin-left: 60px">发布人:</span>
                              <el-tag>{{item.username}}</el-tag>
                           </el-badge>
                           <el-badge  class="item">
                              <span style="margin-left: 60px">发布时间:</span>
                              <el-tag>{{item.createdate}}</el-tag>
                           </el-badge>
                           <br> <br>
                          <el-button type="success" @click="isOpen()">回复</el-button>        
                   </el-card>
                           <el-dialog
                              title="提示"
                             :visible.sync="dialogVisible"
                             width="30%"
                            :before-close="handleClose">
                             <el-input
                             type="textarea"
                             :rows="5"
                             placeholder="请输入内容" 
                             v-model="textarea">
                             </el-input>
                            <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" plain @click="submitForm()">确 定</el-button>
                             </span>
                          </el-dialog>
                <div v-for="item in professors">
                     <el-row>
                          <h3 style="padding-left:20px" class="linetext">专家回复</h3>
                        <el-col :span="5">
                            <div class="grid-content bg-purple-dark">
                                 <el-card shadow="always">
                                    <img src="@/assets/role.jpg" class="doc">
                                 </el-card>
                            </div>
                         </el-col>
                        <el-col :span="19">
                            <div class="rright grid-content bg-purple-dark">
                              <el-card shadow="hover">
                           <router-link to="/Talk"><span class="name">{{item.professorName}}</span></router-link>
                             <el-button type="danger" class="money" @click="dialogVisibles = true">付费咨询</el-button>
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
                                    <span class="unit">{{item.professorUnit}}</span>
                                    <span class="duty">{{item.professorDuty}}</span>
                                    <p class="good">擅长:</p>
                                    <span class="goods">{{item.goodat}}</span>
                              </el-card>
                            </div>
                        </el-col>
                     </el-row>
                    <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">    
                        <div class="dialog-box">
                            <span class="bot"></span>
                            <span class="top"></span>
                         <div  class="textareas">
                          <p class="time">{{item.professorDate}}</p>
                          <p class="texts">{{item.professorRes}}</p>
                          <!-- <div class="zhuiwen"><p>{{item.askAgain}}</p></div>
                          <el-button class="zask" type="text" @click="dialogVisibles = true">追问</el-button>
                                <el-dialog class="dig"
                                    title="提示"
                                  :visible.sync="dialogVisibles"
                                  width="50%"
                                  :before-close="handleClose">
                                  <el-input
                                  type="textarea"
                                  :rows="5"
                                  placeholder="请输入内容" 
                                  v-model="textareaagain">
                                  </el-input>
                                  
                                  <el-button class="dis" @click="dialogVisibles = false">取 消</el-button>
                                  <el-button type="primary" @click="submitAgain('ruleForm')">确 定</el-button>
                                  
                                </el-dialog> -->
                              </div>
                             </div>
                        </div>
                    </el-col>
                    </el-row>
            </div>        
                      


                        <div v-for="item in peoplemes">
                            <el-card :body-style="{ padding: '0px' }">
                            <h3 style="padding-left:20px" class="linetext">网友回复区</h3>
                                <div  class="textareass">
                                    <p class="times">{{item.peopleName}}--{{item.createDate}}</p>
                                    <p class="texts"> {{item.peopleRes}}</p>
                              
                                </div>
                            </el-card>
                        </div>
                </div>
                  </el-col>
                  <el-col :span="6"><div class="right grid-content bg-purple-dark"></div></el-col>
            </el-row>
      </div>
      <div class="footer">
        <p class="copy">Copyright © 2004-2017, 120ASK.COM, All Rights Reserved </p>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        balance:'',
        dialogVisibles: false,
        total:'',
        dialogVisible: false,
        textarea:'',
        textareaagain:'',
        messages:[],
        peoplemes:[],
        professors:[]
       }
    },
    methods: {
      isOpen(){
        this.dialogVisible=true;
      },
      submitForm(){
        debugger
        this.dialogVisible=false
        var roles = JSON.parse( localStorage.getItem("role"))
        if(roles==1){
          this.$axios({
          method:"post",
          url:"/api/add/professorres",
          data:{
            professorName:this.name,
            professorRes:this.textarea,
            professorUnit:this.unit,
            professorDuty:this.duty,
            goodat:this.goodat,
            parentId:JSON.parse( localStorage.getItem("parentID")),
          }
        }).then((res)=>{
            this.textarea=''
            this.$notify({
          title: '回复成功',
          message: '个人积分加1',
          type: 'success'
        });
        })
        }else{
          this.$axios({
          method:"post",
          url:"/api/add/peopleres",
          data:{
            peopleName:JSON.parse( localStorage.getItem("name")),
            peopleRes:this.textarea,
            parentid:JSON.parse( localStorage.getItem("parentID")),
          }
        }).then((res)=>{
          this.textarea=''
          this.$notify({
          title: '评论成功',
          message: '个人积分加1',
          type: 'success'
        });
        })
        }
        this.total++;
        this.$axios.get('/api/update/total/'+this.total+'/'+JSON.parse(localStorage.getItem("data")))
      },
      //  submitForm() {
      //  this.dialogVisible=false
      //     this.$axios({
      //     method:"post",
      //     url:"/api/add/professorres",
      //     data:{
      //       professorName:this.name,
      //       professorRes:this.textarea,
      //       professorUnit:this.unit,
      //       professorDuty:this.duty,
      //       goodat:this.goodat,
      //       parentId:JSON.parse( localStorage.getItem("parentID")),
      //     }
      //   }).then((res)=>{
      //       this.textarea=''
      //   })
      // },
      // submitAgain(formName) {
      //  this.dialogVisibles=false
      //     this.$axios({
      //     method:"post",
      //     url:"/api/add/professorres",
      //     data:{
      //       professorName:this.name,  
      //       professorRes:this.textarea,
      //       professorUnit:this.unit,
      //       professorDuty:this.duty,
      //       goodat:this.goodat,
      //       parentId:JSON.parse( localStorage.getItem("parentID")),
      //       askAgain:this.textareaagain,
      //     }
      //   }).then((res)=>{
      //       this.textareaagain=''
      //       console.log(this.textareaagain),
      //       console.log(this.textarea)
      //   })
      // },
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
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
      
    },
     created:function(){
       var total = localStorage.getItem("total");
       var phone = localStorage.getItem("data");
       this.total=total
       console.log(this.total)
       console.log(phone)
       var flag=JSON.parse( localStorage.getItem("data"));
      this.$axios.get("/api/find/questionsr/"+JSON.parse( localStorage.getItem("parentID")))
      .then((res)=>{
        var respon =res.data;
        this.messages=respon
        console.log(this.messages)
      })

        this.$axios.get("/api/find/professorRes/"+JSON.parse( localStorage.getItem("parentID")))
      .then((res)=>{
        var respons =res.data;
        this.professors=respons
        console.log(this.professors)
      })

      this.$axios.get("/api/find/peopleres/"+JSON.parse( localStorage.getItem("parentID")))
     .then((res)=>{
       var peopleRespon = res.data
       this.peoplemes =peopleRespon
       console.log(res.data)
     })
    

      this.$axios.get("/api/find/professors/"+JSON.parse( localStorage.getItem("data")))
     .then((res)=>{
       this.name=res.data[0].name;
       this.unit=res.data[0].unit;
       this.duty=res.data[0].duty;
       this.goodat=res.data[0].goodat;
     })
     }
  }
</script>


<style scoped>
.header{
    width: 100%;
    max-width: 1500px;
    border-bottom: 3px solid #6eb14a
}
.image{
    width: 200px;
    height: 100px;
    margin-left: 100px
}
.title{
    font-size: 25px;
    color: #6eb14a;
    margin-left: 160px;
    bottom: 30px
}
.footer{
    border-top: 2px solid gray;
}
.copy{
        margin-left: 550px
}
.left.grid-content.bg-purple-dark {
    width: 1060px;
    height: auto;
    min-height: 600px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 25px
}
.right.grid-content.bg-purple-dark {
    border: 1px solid black;
    width: 369px;
    height: auto;
    min-height: 600px;
    margin-bottom: 20px;
    margin-top: 20px;
}
h1.titles {
    text-align: -webkit-center;
}
h3.linetext {
    border-bottom: 1px solid;
}
img.doc {
    height: 91px;
    border: outset 5px #e9a408;
    margin-left: 9px;
}
span.name {
    font-size: 24px;
    color: blue;
    font-weight: bold;
}
span.unit {
   margin-left: 30px
}
span.duty {
   margin-left: 20px
}
p.good {
      font-weight: bold;
}
.el-card__body {
    padding: 20px;
    height: 100px;
}
.dialog-box {
        position: relative;
      }
 .dialog-box span {
          width:0; 
          height:0; 
          font-size:0; 
          overflow:hidden; 
          position:absolute;
 }
.bot{
          border-width: 15px; 
          border-style: solid dashed dashed; 
          border-color: transparent transparent #F9743A transparent; 
          left: 70px; 
          top: -29px;
    }
 .top{
            border-width:13px; 
            border-style:solid dashed dashed; 
            border-color:transparent transparent whitesmoke transparent; 
            left:72px; 
            top:-25px;
    }
.textareas {
    border: 1px solid orange;
    margin-left: 10px;
    margin-top: 11px;
    margin-right: 10px;
    margin-bottom: 20px;
    background-color: whitesmoke;
    border-radius: 10px;
}
p.texts {
    padding-left: 20px;
    padding-right: 20px;
    text-indent:2em
}
.time{
        text-indent: 62em;
    font-size: 14px;
    color: tomato;
}
.textareass {
    border: 1px solid #00ff08;
    margin-left: 10px;
    margin-top: 11px;
    margin-right: 10px;
    margin-bottom: 20px;
    background-color: whitesmoke;
    border-radius: 10px;
}
.times{
    text-indent: 59em;
    font-size: 14px;
    color: tomato;
}
.zask{
    color: green;
    float: right;
}
.dis{
     margin-left: 275px;
    margin-top: 20px;
}
.zhuiwen{
    height: auto;
    margin: 20px;
    background-color: white;
    border-radius: 6px;
    padding-left: 30px;
    color: lawngreen;
}
.money{
  float: right;
}
</style>
