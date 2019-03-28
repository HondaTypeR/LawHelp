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
                                    <div class="askform"  v-for="(item,index) in msgs">
                                       <el-card class="msgcard">
                                           <div>
                                            <span class="borders">姓名：{{item.name}}</span>
                                            <span class="borders">身份证：{{item.idcard}}</span>
                                            <span class="borders">证件号:{{item.assestid}}</span>
                                            <span class="borders">电话:{{item.phone}}</span>
                                            <span class="borders">邮箱:{{item.email}}</span>
                                            <p class="borders">地址:{{item.address}}</p>
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
            msgs:[]
        }
    },
     methods: {
    
     
    },
    created:function(){
        this.$axios.get('/api/find/pass/pro')
        .then((res)=>{
           this.msgs=res.data
           console.log(this.msgs)
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
.borders{
    border: 1px solid #fa4d4d;
    background-color: #b0e3eb;
    padding: 10px;
    border-radius: 10px;
}
</style>
