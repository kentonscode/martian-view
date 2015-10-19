var express = require('express');
var app = express();
var curiosity = require('./server-routes/curiosity-route.js');
var opportunity = require('./server-routes/opportunity-route.js')

app.use('/curiosity-rover', curiosity);
app.use('/opportunity-rover', opportunity);

app.listen(1337);