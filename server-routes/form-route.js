var express = require('express');
var requestHttp = require('request');
var form = express.Router(); 
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


 // POST jsonParser to console 
 form.post('/', jsonParser, function (request, response) {
   var user = new newUser(request.body);
   user.save()
   response.send('thank you')
});

 module.exports = form;