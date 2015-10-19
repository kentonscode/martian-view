var express = require('express');
var app = express();
var curiosity = require('./server-routes/curiosity-route.js');

app.use('/curiosity-rover', curiosity);

app.listen(1337);