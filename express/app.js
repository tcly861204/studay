const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('express/public'));



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000);