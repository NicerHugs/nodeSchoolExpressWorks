var express = require('express');
var bodyParser = require('body-parser');
var port = process.argv[2] || 3000;
var app = express();

function reverse(str) {
  return str.split('').reverse().join('');
};

app.use(bodyParser.urlencoded({extended: false}));

app.listen(port);
app.post('/form', function(req, res) {
  if (!req.body) return res.status(400);
  res.send(reverse(req.body.str));
})
