<!-- readyState表示连接有四种状态：
CONNECTING (0)：表示还没建立连接；
OPEN (1)： 已经建立连接，可以进行通讯；
CLOSING (2)：通过关闭握手，正在关闭连接；
CLOSED (3)：连接已经关闭或无法打开； -->
<template>
  <div class="talkbox">
       <el-card class="box-card header">
            <span>{{status}}</span>
            <el-button type="danger" class="close"  @click="closeWebSocket()">关闭对话</el-button>
       </el-card>
     <el-card class="box-card talk">
    <div class="border">
    <div v-html="data"></div>
    <!-- <div class="tt">{{data}}</div> -->
    </div>
     </el-card>
     <el-card class="box-card send">
             <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="text">
            </el-input>
          <el-button type="primary" class="snedMess"  @click="send()">发送消息</el-button>
     </el-card>
  </div>
</template>
<script>
export default {
  name: "WebSocket",
  components: {
 
  },
  data() {
    return {
      text: '',
      data: '',
      status:'',
      websocket: null
    }
  },
  mounted() {
      debugger
    if ('WebSocket' in window) {
      this.websocket = new WebSocket('ws://localhost:8080/websocket');
      this.initWebSocket()
    } else {
      alert('当前浏览器 Not support websocket')
    }
  },
  beforeDestroy() {
    this.onbeforeunload()
  },
  methods: {
    initWebSocket() {
      //连接错误
      this.websocket.onerror = this.setErrorMessage
 
      // //连接成功
      this.websocket.onopen = this.setOnopenMessage
 
      //收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage
 
      //连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage
 
      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload
    },
    setErrorMessage() {
      this.status = "WebSocket连接发生错误" + '   状态码：' + this.websocket.readyState;
    },
    setOnopenMessage() {
      this.status = "建立连接，可以进行通讯" + '   状态码：' + this.websocket.readyState;
    },
    setOnmessageMessage(event) {
      var user=JSON.parse( localStorage.getItem("name"))
      
      this.data+= user+':' + event.data;
      console.log(event.data)
    },
    setOncloseMessage() {
      this.status = "本次通话结束" + '   状态码：' + this.websocket.readyState;
    },
    onbeforeunload() {
      this.closeWebSocket();
    },
 
    //websocket发送消息
    send() {
      this.websocket.send(this.text)
      this.text = ''
    },
    closeWebSocket() {
      this.websocket.close()
    }
  }
}
 
</script>
<style scoped>
.border{
     height: 360px;
     overflow-y: auto
}
.talk{
    width: 700px
}
.send{
    width: 700px;
    height: 212px;
}
.snedMess{
    float: right;
    margin-bottom: 5px;
    margin-top: 5px
}
.header{
    width: 700px;
    height: 45px;
}
.close{
    float: right;
    line-height: 13px !important;
    padding: 4px 24px !important;
}
.talkbox{
    margin-left: 400px  
}
.tt{
    border: 1px solid
}
</style>