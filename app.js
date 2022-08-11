var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(8080, function () {
  console.log('Example "Hello World" app listening on port 8080!');
});

let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);
