var express = require('express');
var app = express();
var port = process.argv[2];
var pathName = process.argv[3] || 'public';

app.listen(port);
app.use(express.static(pathName));
