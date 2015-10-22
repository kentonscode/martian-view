var express = require('express');
var app = express();
var curiosity = require('./server-routes/curiosity-route.js');
var opportunity = require('./server-routes/opportunity-route.js');
var spirit = require('./server-routes/spirit-route.js');
var roversRoute = require ('./server-routes/rovers-route.js')
var mongoose = require('mongoose');

//mongodb

mongoose.connect('mongodb://localhost/martian')

mongoose.model('users', {name: String});

app.get('/users', function(req, res) {
  mongoose.model('users').find(function(err, users) {
    res.send(users)
  });
});


app.use('/curiosity-rover', curiosity);
app.use('/opportunity-rover', opportunity);
app.use('/spirit-rover', spirit);
app.use('/mars-rovers', roversRoute)


app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

app.listen(1337);