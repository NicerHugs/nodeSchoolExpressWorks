var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2] || 3000;
var filePath = process.argv[3];



app.get('/books', function(req, res) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) return res.sendStatus(500);
    try {
      var books = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(books);
  });
});

app.listen(port);
