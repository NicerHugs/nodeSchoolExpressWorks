// Write a route that extracts data from the query string in the GET /search URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

var express = require('express');
var app = express();
var port = process.argv[2] || 3000;

app.listen(port);

app.get('/search', function(req, res) {
  var query = req.query;
  res.send(query);
});
