var express = require('express');
var app = express();
var curiosity = require('./server-routes/curiosity-route.js');
var opportunity = require('./server-routes/opportunity-route.js');
var spirit = require('./server-routes/spirit-route.js');

app.use('/curiosity-rover', curiosity);
app.use('/opportunity-rover', opportunity);
app.use('/spirit-rover', spirit);

app.listen(1337);