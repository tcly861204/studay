const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('vue'));
//es6->es5 system.js实现
app.get('/', function(req, res) {
  res.send(fs.readFileSync('vue/index.html', 'utf-8'));
});
app.listen(3000);