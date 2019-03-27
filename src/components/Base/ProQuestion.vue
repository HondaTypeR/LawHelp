<template>
    <div>
         <div>
             <el-row>
                <el-col :span="16">
                    <div class="left grid-content bg-purple-dark ">
                        

                        <div v-for="(item,index) in messages" :key="item.id">
                          <el-card shadow="hover" class="cardbox">
                            <router-link :to="{name:'BBC',params:{ID:questionId}}"> <h2 @click="getIndex(item.id)">{{item.title}}</h2></router-link>
                             <p>{{item.details}}</p>
                            <el-badge :value="200" :max="99" class="item">
                            <el-button size="small" >评论</el-button>
                            </el-badge>
                            <el-badge :value="100" :max="10" class="item">
                            <el-button size="small" @click="getIndex(item.id)">回复</el-button>
                                <el-dialog
                                        title="提示"
                                        :visible.sync="dialogVisible"
                                        width="30%"
                                        :before-close="handleClose">
                                        <el-input
                                        type="textarea"
                                        :rows="5"
                                        placeholder="请输入内容" 
                                        v-model="ruleForm.textarea">
                                      </el-input>
                                        <span slot="footer" class="dialog-footer">
                                          <el-button @click="dialogVisible = false">取 消</el-button>
                                          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                                        </span>
                                      </el-dialog>
                            </el-badge>
                            <el-badge  class="item">
                              <el-tag>{{item.type}}</el-tag>
                            </el-badge>
                            <el-badge  class="item">
                              <el-tag type="success">{{item.province}}</el-tag>
                            </el-badge>
                            <el-badge  class="item">
                              <el-tag type="warning">{{item.city}}</el-tag>
                            </el-badge>
                            <el-badge class="item">
                             <el-tag type="info">发布人:{{item.username}}</el-tag>
                             </el-badge> 
                             <el-badge class="item">
                             <el-tag type="danger">发布时间:{{item.createdate}}</el-tag>
                             </el-badge>                        
                          </el-card>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="right grid-content bg-purple-dark" >
                </div></el-col>
            </el-row>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
          dialogVisible: false,
          questionId:'',
            messages:[],
            ruleForm:{
              textarea:''
            },
            professorInfo:{
                name:'',
                unit:'',
                duty:'',
                goodat:''
            }
        }
    },
    components:{

    },
      methods:{
     submitForm(formName) {
       this.dialogVisible=false
          this.$axios({
          method:"post",
          url:"/api/add/professorres",
          data:{
            professorName:this.name,
            professorRes:this.ruleForm.textarea,
            professorUnit:this.unit,
            professorDuty:this.duty,
            goodat:this.goodat,
            parentId:this.questionId,
          }
        }).then((res)=>{
            this.ruleForm.textarea=''
        })
      },
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      getIndex(index){
          this.dialogVisible=true;
          this.questionId=index
          localStorage.setItem('parentID',JSON.stringify(index))
          console.log( this.questionId)
      }
    },
    created:function(){
    this.$axios.get("/api/find/professors/"+JSON.parse( localStorage.getItem("data")))
     .then((res)=>{
       this.name=res.data[0].name;
       this.unit=res.data[0].unit;
       this.duty=res.data[0].duty;
       this.goodat=res.data[0].goodat;
     })
    
      this.$axios.get("/api/find/hotquestion/36")
      .then((res)=>{
        var respon =res.data;
        this.messages=respon
        console.log(this.messages)
      })

    },
    watch:{

    }
   
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-badge.date {
    float: right;
    margin-right: 165px;
}
.el-card.cardbox.is-hover-shadow {
    margin-top: 10px;
}
</style>
