<template>
        <div>
            <el-card class="border" v-for="(item ,index) in caseList" :key="item.id">
              <router-link to="/CaseDetails"><h1 @click="getCaseId(item.id)">{{item.title}} </h1></router-link>
                <p class="details"> {{item.detailes | ellipsis}}</p>
            </el-card>
            <!-- <el-button type="primary" @click="up()">上一页</el-button>
            <el-button type="primary">下一页</el-button> -->
           <el-pagination class="pages"
           background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[5, 10, 30, 40]"
            :page-size="pageSize"
            layout=" prev, pager, next, sizes, total"
            :total="total">
            </el-pagination>
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
            currentPage1: 1,
            total: '',
            page: 1,
            pageSize: 5,
            pageNum:1,
            caseList:[],
            title:'',
            detailes:""  　
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
           this.$axios.get('/api/find/allcase/'+2+'/'+this.pageNum+'/'+this.pageSize)
            .then((res)=>{
                this.caseList=res.data
                this.total=res.data.length
                console.log(res)
            })
        },
        handleSizeChange(val) {
                this.pageSize = val;
                this.handleCaseList();
            },
            //条目改变时
            handleCurrentChange(val) {
                this.pageNum = val;
                this.handleCaseList();
            },
    },
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
