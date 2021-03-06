var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendfile('index.html', {root: __dirname + '/public/html/'});
});

server.get('/login', function(req, res){
  res.sendfile('login.html', {root: __dirname + '/public/html/'});
});

server.get('/signup', function(req, res){
  res.sendfile('signup.html', {root: __dirname + '/public/html/'});
});

server.listen(port, function(){
  console.log("Listening on port" + port);
});
