var express = require('express');
var requestHttp = require('request');
var opportunity = express.Router(); 

opportunity.get('/:date', function(req, res, next) {
  requestHttp('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=' + req.params.date + '&api_key=XXXXXXXXXXXXXXXXXXXXXX',
    function(error, response, body) {
      var photos = JSON.parse(body).photos;
      var img_src = {};
      for (var i = 0; i < photos.length; i++) {
        img_src[i] = photos[i].img_src;
      }
      res.send(img_src);
    });
});

module.exports = opportunity;