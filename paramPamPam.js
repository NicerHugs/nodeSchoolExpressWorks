var express = require('express');
var app = express();
var port = process.argv[2];

app.listen(port);

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  return res.send(require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex'));
});
