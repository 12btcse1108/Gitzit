var path = require('path');
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, './dist')));

app.listen(PORT, function () {
  console.log('Express server is up on port '+PORT);
});
