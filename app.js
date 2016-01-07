var express = require('express');
var path = require('path');
var app = express();

/** get 함수 활용하여 Text 출력하는 Code
app.get('/', function(req, res) {
  res.send('Hello world!');
});
**/

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
  console.log('Server On!');
});
