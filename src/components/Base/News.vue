<template>
  <div style="box">
      <div style="width:70%;float:left">
  <el-tabs>
    <el-tab-pane label="时事新闻">
        <div class="border">
            <li> <a href="">男子遇车祸心脏骤停 路过医生跪地施救</a></li>
            <li> <a href="">老板一直没有签订劳动合同，法人变更了，符合劳动法规定的未签订劳动合同最多可索赔11个月工资的条件吗？</a></li>
            <li> <a href="">老板一直没有签订劳动合同，法人变更了，符合劳动法规定的未签订劳动合同最多可索赔11个月工资的条件吗？</a></li>
            <li> <a href="">老板一直没有签订劳动合同，法人变更了，符合劳动法规定的未签订劳动合同最多可索赔11个月工资的条件吗？</a></li>
            <li> <a href="">老板一直没有签订劳动合同，法人变更了，符合劳动法规定的未签订劳动合同最多可索赔11个月工资的条件吗？</a></li>
            <li> <a href="">老板一直没有签订劳动合同，法人变更了，符合劳动法规定的未签订劳动合同最多可索赔11个月工资的条件吗？</a></li>
            <li> <a href="">老板一直没有签订劳动合同，法人变更了，符合劳动法规定的未签订劳动合同最多可索赔11个月工资的条件吗？</a></li>
        </div>
    </el-tab-pane>
  </el-tabs>
  </div>
  <div class="box-right">
  待加载数据
  </div>
  </div>
</template>
<script>
export default {
    name:'News',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.border{
    width: 95%;
    height: auto;
    border: 2px solid blue;
    padding: 20px
}
li{
    padding-bottom: 6px
}
.box{
    width: 100%;
    flex-direction: row;
}
.box-right{
    float: right;
    width: 29%;
    border: 1px solid gainsboro;
    height: 300px;
 
}
</style>
