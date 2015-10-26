var express = require('express');
var app = express();
var index = require ('./server-routes/index-route.js')
var curiosity = require('./server-routes/curiosity-route.js');
var opportunity = require('./server-routes/opportunity-route.js');
var spirit = require('./server-routes/spirit-route.js');
var roversRoute = require ('./server-routes/rovers-route.js')
var signUp = require ('./server-routes/sign-up.js')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser')

//cookie Parser
app.use(cookieParser());
var Cookie = mongoose.model('Cookie', {id: Number});

app.use(function (request, response, next) {
  var cookie = request.cookies.cookieName;
  if (cookie === undefined) {
    console.log('creating cookie');
    var cookieNumber = Math.floor(Math.random()*90000) + 10000;
    response.cookie('cookieName', cookieNumber, { maxAge: 90000000, httpOnly: true});

    var cookie = new Cookie({id: cookieNumber});
    cookie.save(function (err) {
    });  
  } else {
    console.log('cookie already set');
    console.log(cookie);
  }
  next();
});

app.use('/curiosity-rover', curiosity);
app.use('/opportunity-rover', opportunity);
app.use('/spirit-rover', spirit);
app.use('/mars-rovers', roversRoute)
app.use('/register', signUp);

app.use('/', index);
app.use('/video', express.static('video'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

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

var newUser = mongoose.model('newUser', userSchema);

 // POST jsonParser
 app.post('/sign-up', jsonParser, function (request, response) {
   var user = new newUser(request.body);
   user.save()
   response.send('thank you')
 });



 app.listen(1337);