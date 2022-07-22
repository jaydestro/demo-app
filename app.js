var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World to Corinde  on 20220722  1254  House');
});
app.listen(8080, function () {
  console.log('Example "Hello World" app listening on port 8000! Corinde  on 20220722  1254  House');
});
