var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/custom-view-folder');

app.get('/', function(req, res){
    //res.send('<h1>Hello Express</h1>');
    res.render('default', {
        title: 'developer',
        games: ['Halo CE', 'Halo 2', 'Halo 3']
    }
    );
});

app.get('/about', function(req, res){
    res.send('<h1>About Me</h1>');
});

app.get('/who/:name?', function(req, res){
    var name = req.params.name;

    res.send(name + ' was here.');
});

app.get('/who/:name?/:title?', function(req, res){
    var name = req.params.name;
    var title = req.params.title;

    res.send(name + ' the ' + title + ' was here. <br>');
});

app.get('*', function(req, res){
    res.send('BAD ROUTE');
});

var server = app.listen(3000, function(){
    console.log("Go to: http://localhost:3000/");
})