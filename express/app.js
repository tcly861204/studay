const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('express/public'));



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('*', function(req, res, next) {
  res.status(404);
  res.end('404');
});


app.listen(3000);