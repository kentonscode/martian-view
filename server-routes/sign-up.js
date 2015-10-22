var express = require('express');
var signUp = express.Router(); 
var path = require('path');

signUp.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../sign-up.html'));
});


module.exports = signUp;
