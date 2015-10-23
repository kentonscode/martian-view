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
var cookieParser = require('cookie-parser')

app.use('/curiosity-rover', curiosity);
app.use('/opportunity-rover', opportunity);
app.use('/spirit-rover', spirit);
app.use('/mars-rovers', roversRoute)
app.use('/register', signUp);
app.use(cookieParser());

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

//cookie Parser

app.use(function (request, response, next) {
  var cookieParser = request.cookies.cookieName;
  if (cookieParser === undefined) {
    console.log('creating cookie');
    var cookieNumber = Math.floor(Math.random()*90000) + 10000;
    response.cookieParser('cookieName', cookieNumber, { maxAge: 90000000, httpOnly: true});

    var cookieParser = new userCookie({id: cookieNumber});
    cookieParser.save(function (err) {
    });  
  }
  else{console.log('cookie already set');}
  console.log(cookieParser);
  next();
});


//Mongodb

//view all users
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

var cookieSchema = mongoose.Schema ({
  id: Number
});


var newUser = mongoose.model('newUser', userSchema);
var cookie = mongoose.model('cookie', cookieSchema);

 // POST jsonParser
 app.post('/sign-up', jsonParser, function (request, response) {
   var user = new newUser(request.body);
   var newCookie = new cookie(request.body);
   newCookie.save()
   user.save()
   response.send('thank you')
 });



 app.listen(1337);