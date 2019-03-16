<template>
    <div>
        <ab-header></ab-header>
        <div>
            <div class="imgborder">
                <img src="@/assets/success.jpg" class="img">
            </div>   
            <div class="right-box">
                <h1>恭喜，发布成功</h1>
                <img src="@/assets/msg.png" class="msg">
                <p class="warn">为保证信息质量，我们会对发布的信息进行抽查审核，如违规我们会进行处理，敬请谅解</p>
                <router-link to="/TalkAbout"><p class="msg_1">查看信息</p></router-link>
                <router-link to="/Ask"><p class="msg_2">再发一条</p></router-link>
            </div>
        </div>
        <ab-footer></ab-footer>
    </div>
</template>
<script>
import Header from '@/components/Const/Header.vue'
import Footer from '@/components/Const/Footer.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        'ab-header':Header,
        'ab-footer':Footer,
    },
     created:function(){
     this.$axios.get("/api/find/userinfos/"+JSON.parse( localStorage.getItem("data")))
     .then((res)=>{
       this.username=res.data.result[0].username;
       var ID = res.data.result[0].phone;
       console.log(ID)
     })
  }
}
</script>

<style scoped>
img.img {
    width: 600px;
    height: 400px;
    margin-top: 40px;
}
.right-box {
    width: 600px;
    height: 400px;
    float: right;
    position: absolute;
    top: 80px;
    left:635px
}
.msg{
    width:40px
}
p.warn {
    float: inherit;
    margin-right: -75px;
}
p.msg_1 {
    position: absolute;
    top: 180px;
    left: 120px;
}
p.msg_2 {
    position: absolute;
    top: 180px;
    left: 250px;
}
</style>
