var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<h1>Hello Express</h1>');
});

var server = app.listen(3000, function(){
	console.log("Go to: http://localhost:3000/");
})