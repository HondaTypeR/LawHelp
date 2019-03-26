<template>
        <div>
            <el-card class="border">
                <h1>{{title}} </h1>
                <p class="details"> {{details | ellipsis}}</p>
            </el-card>
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
            title:'[黄赌毒.黑社会] 微信建群开赌场 聊天记录露马脚',
            details:"日前，湖北省钟祥市检察院侦查监督部在办理一起开设赌场案中，通过提取涉案手机电子信息，挖出了8名漏犯。2018年10月15日，公安机关以杨某涉嫌通过微信建群的方式开设赌日前，湖北省钟祥市检察院侦查监督部在办理一起开设赌场案中，通过提取涉案手机电子信息，挖出了8名漏犯。2018年10月15日，公安机关以杨某涉嫌通过微信建群的方式开设赌日前，湖北省钟祥市检察院侦查监督部在办理一起开设赌场案中，通过提取涉案手机电子信息，挖出了8名漏犯。2018年10月15日，公安机关以杨某涉嫌通过微信建群的方式开设赌"  　
        }
    },
}
</script>

<style scoped>
.border{
    margin: auto;
    width: 1000px;
}
</style>
