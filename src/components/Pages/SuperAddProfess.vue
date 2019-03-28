<template>
   <div>
        <el-container>
            <el-header>
                <div class="border">
                    <h1 class="title">法律帮管理后台界面</h1>
                </div>
            </el-header>
            <el-main>
                <div class="body">
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content bg-purple left">
                                 <router-link to="/SuperAdmin"> <el-button class="buttons">添加新闻</el-button></router-link>
                                 <router-link to="/SuperAddProfess"><el-button class="buttons">认证中心</el-button></router-link>
                                 <router-link to="/Pass"><el-button class="buttons">验证专家</el-button></router-link>
                                 <router-link to="/NotPass"><el-button class="buttons">驳回专家</el-button></router-link>
                            </div>
                        </el-col>
                        <el-col :span="20">
                            <div class="grid-content bg-purple-light right">
                                <h1 class="NewsTitle">认证专家管理</h1>
                                    <div class="askform"  v-for="(item,index) in professors" :key="item.phone">
                                       <el-card class="msgcard">
                                           <div>
                                            <el-tag type="danger" class="tags"><span>姓名:{{item.name}}</span></el-tag>
                                            <el-tag type="danger"  class="tags"><span>证件号:{{item.assestid}}</span></el-tag>
                                            <el-tag type="danger" class="tags"> <span>身份证号:{{item.idcard}}</span></el-tag>
                                            <el-tag type="danger" class="tags"><span>联系电话:{{item.phone}}</span></el-tag>
                                            <el-button type="danger" size="small" class="buttonp" @click="temps(item.phone)">驳回</el-button>
                                              <el-dialog
                                                title="提示"
                                                :visible.sync="dialogVisibles"
                                                width="30%"
                                                :before-close="handleClose">
                                                   <el-input
                                                    type="textarea"
                                                    :rows="5"
                                                    placeholder="请输入内容" 
                                                    v-model="notpassRes">
                                                    </el-input>
                                                <span slot="footer" class="dialog-footer">
                                                    <el-button @click="dialogVisibles = false">取 消</el-button>
                                                    <el-button type="primary" @click="notpass(tt)">确 定</el-button>
                                                </span>
                                                </el-dialog>
                                             <el-button type="success" size="small" class="buttonp" @click="tempss(item.phone,item.name)">通过</el-button>
                                             <el-dialog
                                                title="提示"
                                                :visible.sync="dialogVisible"
                                                width="30%"
                                                :before-close="handleClose">
                                                <span>这是一段信息</span>
                                                <span slot="footer" class="dialog-footer">
                                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                                    <el-button type="primary" @click="pass(mm,dd)">确 定</el-button>
                                                </span>
                                                </el-dialog>
                                             <br>
                                            <el-tag type="warning"  class="tags"><span>邮箱地址:{{item.email}}</span></el-tag>
                                            <el-tag type="success"  class="tags"><span>公司名称:{{item.unit}}</span></el-tag>
                                            <el-tag  class="tags"><span>公司地址:{{item.address}}</span></el-tag>
                                             <br>
                                            <el-tag type="warning"  class="tags"><span>个人职称:{{item.duty}}</span></el-tag>
                                            <el-tag type="success" ><span>擅长领域:{{item.goodat}}</span></el-tag>
                                           </div>
                                       </el-card>
                                    </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-main>
            <el-footer>
                <div class="footer">
                    <h3 class="footers">@copy right 2019-03-27 法律帮版权所有</h3>
                </div>
            </el-footer>
        </el-container>
   </div>
</template>

<script>
export default {
    data(){
        return{
        professors:[],
        dialogVisible:false,
        dialogVisibles:false,
        notpassRes:'',
        tt:'',
        mm:'',
        password:123456,
        dd:''
        }
    },
     methods: {
     passed(){
        this.dialogVisible = true
     },
     notpass(temp){
        this.$axios({
            method:"post",
            url:"/api/update/active",
            data:{
                phone:temp,
                active:'N',
                isshow:'N',
                notpassRes:this.notpassRes
            }
        }).then((res)=>{
            this.notpassRes=' '
        })
        this.dialogVisibles = false
     },
     temps(ras){
         this.dialogVisibles=true
         this.tt=ras;
     },
     tempss(rbs,names){
         this.dialogVisible = true
         this.mm=rbs;
         this.dd=names;
     },
     pass(tep,mep){
         this.$axios.get('/api/add/user/'+tep+'/'+mep+'/'+this.password+'/'+1+'/'+0+'/'+0)
         .then((res)=>{
             console.log(res)
         })
          this.$axios({
            method:"post",
            url:"/api/update/active",
            data:{
                phone:tep,
                active:'Y',
                isshow:'N',
            }
        })
     }
    },
    created:function(){
        this.$axios.get('/api/find/professor/pass')
        .then((res)=>{
            this.professors=res.data
             debugger
            console.log(this.professors)
        })
    }
     
    
}
</script>

<style scoped>
.title{
     padding: 10px;
     text-align: center
}
.border{
    background-color:turquoise
}
.footer{
    background-color:turquoise
}
.footers{
     padding: 10px;
     text-align: center
}
.body{
    min-height: 500px;
    height: auto;
    max-height: 800px;
}
.left{
    width: 220px;
    background-color: turquoise;
    border-radius: 7px;
    min-height: 500px;
    height: auto;
    max-height: 800px;
    border: 5px solid yellow
}
.buttons{
    width: 200px;
    margin: 10px;
}
.right{
    background-color: whitesmoke;
    border-radius: 7px;
    border: 5px solid yellow;
    min-height: 500px;
    height: auto;
}
.NewsTitle{
    text-align: center
}
.msgcard{
    margin: 10px;
}
.tags{
     margin: 5px;
}
.buttonp{
    float: right;
    margin-right: 10px;
}
</style>
