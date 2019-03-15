<template>
    <div>
        <ab-header></ab-header>
        <div>
            <div class="imgborder">
                <img src="@/assets/success.jpg" class="img">
            </div>   
            <div class="right-box">
                <h1>恭喜，提交成功，请耐心等待</h1>
                <img src="@/assets/msg.png" class="msg">
                <p class="warn">我们正在验证您提供的信息，请耐心等待</p>
                <router-link to="/"><p class="msg_2">先去逛逛</p></router-link>
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
    created:{
        
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
