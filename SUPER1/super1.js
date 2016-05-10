var express=require('express');
var app = require('express')();
var app2=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set("view engine","jade");
app.use(express.static("public"));

app.get('/prueba',function(req,res){
res.write("Prueba test");
res.end();
});

app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.html');
  res.render("index");
});

app.get('/dos', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});

io.on('connection', function(socket){

	console.log("contectado");

  socket.on('chat message', function(msg){
  	console.log(msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
