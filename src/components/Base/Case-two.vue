<template>
        <div>
            <el-card class="border" v-for="(item ,index) in caseList" :key="item.id">
              <router-link to="/CaseDetails"><h1 @click="getCaseId(item.id)">{{item.title}} </h1></router-link>
                <p class="details"> {{item.detailes | ellipsis}}</p>
            </el-card>
            <el-button type="primary" @click="up()">上一页</el-button>
            <el-button type="primary">下一页</el-button>
        </div>
</template>
<script>
export default {
    filters:{
        ellipsis(value){
            if(!value) return ''
            if(value.length>188){
                return value.slice(0,188) + '...'
            }
            return value
        }
    },
    data(){
        return{
            currentPage:1, //初始页
            pagesize:3, 
            caseList:[],
            title:'[黄赌毒.] 微信建群开赌场 聊天记录露马脚',
            detailes:"日前，湖北省钟祥市检察院侦查监督部在办理一起开设赌场案中，通过提取涉案手机电子信息，挖出了8名漏犯。2018年10月15日，公安机关以杨某涉嫌通过微信建群的方式开设赌日前，湖北省钟祥市检察院侦查监督部在办理一起开设赌场案中，通过提取涉案手机电子信息，挖出了8名漏犯。2018年10月15日，公安机关以杨某涉嫌通过微信建群的方式开设赌日前，湖北省钟祥市检察院侦查监督部在办理一起开设赌场案中，通过提取涉案手机电子信息，挖出了8名漏犯。2018年10月15日，公安机关以杨某涉嫌通过微信建群的方式开设赌"  　
        }
    },
     created(){
        this.handleCaseList()
    },
     methods:{
        getCaseId(id){
        localStorage.setItem('caseId',JSON.stringify(id));
        },
        up(){
            this.currentPage=this.currentPage+1;
            // console.log(this.currentPage)
        },
        handleCaseList() {
           this.$axios.get('/api/find/allcase/'+1+'/'+this.currentPage+'/'+this.pagesize)
            .then((res)=>{
                this.caseList=res.data
                console.log(res)
            })
        },
    },
    computed:{
        updatePage(){
            return this.currentPage
        }
    },
    watch:{
        updatePage(newval,oldval){
            console.log(newval)
            this.handleCaseList()
        }
    }
}
</script>

<style scoped>
.border{
    margin: auto;
    width: 1000px;
}
.pages{
    text-align: center;
    margin-top: 10px
}
</style>
