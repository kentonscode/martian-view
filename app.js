var express = require('express');
var app = express();
var curiosity = require('./server-routes/curiosity-route.js');
var opportunity = require('./server-routes/opportunity-route.js');
var spirit = require('./server-routes/spirit-route.js');
var roversRoute = require ('./server-routes/rovers-route.js')
var signUp = require ('./server-routes/sign-up.js')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//mongodb

mongoose.connect('mongodb://localhost/db_martian')

mongoose.model('newusers', {name: String});

app.get('/users', function(req, res) {
  mongoose.model('newusers').find(function(err, newusers) {
    res.send(newusers)
  });
});

//Schema
var userSchema = mongoose.Schema ({
  id: Number,
  firstname: String,
  lastname: String,
  password: String
});

var newUser = mongoose.model('newUser', userSchema);

 // POST jsonParser to console 
 app.post('/sign-up', jsonParser, function (request, response) {
   var user = new newUser(request.body);
   user.save()
   response.send('thank you')
});



 app.use('/curiosity-rover', curiosity);
 app.use('/opportunity-rover', opportunity);
 app.use('/spirit-rover', spirit);
 app.use('/mars-rovers', roversRoute)
 app.use('/register', signUp);


 app.use('/css', express.static('css'));
 app.use('/js', express.static('js'));
 app.use('/img', express.static('img'));

 app.listen(1337);