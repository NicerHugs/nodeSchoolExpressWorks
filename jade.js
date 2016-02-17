var express = require('express');
var app = express();
var port = process.argv[2] || 3000;
var viewPath = process.argv[3];

app.set('view engine', 'jade');
app.set('views', viewPath)

app.listen(port);
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
});
