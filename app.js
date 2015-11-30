var express = require('express');
var app = express();
var routes = require('./routes/teams');

app.locals.siteTile = "Halo Scrims";

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/custom-view-folder');

app.get('/', function(req, res){
    //res.send('<h1>Hello Express</h1>');
    res.render('default', {
        pageTitle: 'Home',
        className: 'home'
    });
});

app.get('/about', function(req, res){
    res.render('default', {
        pageTitle: 'About Halo Scrims',
        className: 'about'
    });
});

app.get('/teams/', routes.teams);
app.get('/teams/:teamName?', routes.teamSingle);

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