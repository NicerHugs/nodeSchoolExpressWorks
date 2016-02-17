var express = require('express');
var stylus = require('stylus');
var app = express();

var port = process.argv[2] || 3000;
var pathName = process.argv[3] || 'public';

app.use(stylus.middleware(pathName));
app.use(express.static(pathName));

app.listen(port);
