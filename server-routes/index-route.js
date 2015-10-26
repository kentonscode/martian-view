var express = require('express');
var index = express.Router(); 
var path = require('path');

index.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../index.html'));
});


module.exports = index;
