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
                                 <router-link to="/SuperResY"><el-button class="buttons">管理留言</el-button></router-link>
                                 <router-link to="/SuperResN"><el-button class="buttons">封禁留言</el-button></router-link>
                            </div>
                        </el-col>
                        <el-col :span="20">
                            <div class="grid-content bg-purple-light right">
                                <h1 class="NewsTitle">封禁留言</h1>
                                    <div class="askform"  v-for="(item,index) in resdata" :key="item.peopleName">
                                       <el-card class="msgcard">
                                           <div>
                                            <el-tag type="danger" class="tags"><span>用户名:{{item.peopleName}}</span></el-tag>
                                            <el-tag type="success"  class="tags"><span>留言内容:{{item.peopleRes}}</span></el-tag>
                                            <el-tag type="success"  class="tags"><span>发布日期:{{item.time}}</span></el-tag>
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
        peopleName:'',
        peopleRes:'',
        time:'',
        resdata:[]
        }
    },
    created(){
        this.$axios.get('/api/selectAlls')
        .then((res)=>{
            console.log(res.data)
            this.resdata=res.data
        })
    },
   
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

</style>
