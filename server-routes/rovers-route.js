var express = require('express');
var roversRoute = express.Router(); 
var path = require('path');

roversRoute.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../mars-rovers.html'));
});


module.exports = roversRoute;
