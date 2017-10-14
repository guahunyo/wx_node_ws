var WebsocketServer = require("ws").Server;
var wss = new WebsocketServer({
	port:3001
}); 
var sockets = {};

//当客户端有连接进入的时候会触发connection事件
wss.on("connection",function (ws){
	var user = ws.upgradeReq.url;
	sockets[user]=ws;
	ws.on("message",function(msg){
		// console.log(msg);
		sockets["/username"].send(msg);

		// ws.send("响应的"+msg);
	});
	// ws.on("close",function(){
	// 	for(var i = 0;i<sockets.length;i++){
	// 		if(socket[i]==this){
	// 			sockets.splice(i,1);
	// 			break;
	// 		}
	// 	}
	// })
});  
