var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!  Use Azure!');
});
app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
