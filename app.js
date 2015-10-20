var express = require('express');
var app = express();
var curiosity = require('./server-routes/curiosity-route.js');
var opportunity = require('./server-routes/opportunity-route.js');
var spirit = require('./server-routes/spirit-route.js');
var roversRoute = require ('./server-routes/rovers-route.js')

app.use('/curiosity-rover', curiosity);
app.use('/opportunity-rover', opportunity);
app.use('/spirit-rover', spirit);
app.use('/mars-rovers', roversRoute)


app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));

app.listen(1337);