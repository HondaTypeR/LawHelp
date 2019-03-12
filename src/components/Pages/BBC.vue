<template>
  <div>
      <div class="header">
            <img src="@/assets/questions.png" class="image">
            <span class="title">亲，您来快速问医生，是想叫医生帮你解决什么呢？</span>
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
                           <router-link to="/Ask"> <el-button type="success">我也要提问</el-button></router-link>
                 </el-card>
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
                                    <span class="name">{{item.professorName}}</span>
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
                              </div>
                             </div>
                        </div>
                    </el-col>
                    </el-row>
            </div>        
                      



                        <!-- <el-card :body-style="{ padding: '0px' }">
                        <h3 style="padding-left:20px" class="linetext">网友回复区</h3>
                      <div  class="textareass">
                          <p class="times">Jack---2019-03-06 01:12:15</p>
                          <p class="texts"> 从你描述的情况来分析，踝关节扭伤之后仍然存在脚肿的情况，大多是由于存在一血没有完全吸收，考虑应用活血化瘀的药物，同时配合针灸效果更好。</p>
                     
                    </div>
                        </el-card> -->
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
        id:'26',
        messages:[],
        professors:[]
       }
    },
    methods: {
      
      
    },
     created:function(){
      this.$axios.get("/api/find/questions/"+this.id)
      .then((res)=>{
        var respon =res.data;
        this.messages=respon
        console.log(this.messages)
      })

        this.$axios.get("/api/find/professorRes/"+this.id)
      .then((res)=>{
        var respons =res.data;
        this.professors=respons
        console.log(this.professors)
      })
    },
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
</style>
