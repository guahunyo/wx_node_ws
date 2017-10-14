var wsApi = "ws://192.168.1.105:3001/username";
var openBol = false;
Page({
  data: {
    
  },
  onLoad:function(){
    wx.connectSocket({
      url: wsApi,
      data:{
      },
      header:{ 
        'content-type': 'application/json'
      },
      protocols: ['protocol1'],
      method:"GET",
      success:function(){
        console.log("客户端连接成功");
      }
    }),
    wx.onSocketOpen(function(res) {
      console.log('WebSocket连接已打开！');
      openBol = true;
    }),
    wx.onSocketMessage(function(res) {
      console.log('收到服务器内容：' + res.data)
    })

  },
  sendMsg:function(e){
    if(openBol){
      wx.sendSocketMessage({
        data:e.detail.value
      });
    }
  }
  
})
