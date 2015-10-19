var express = require('express');
var requestHttp = require('request');
var curiosity = express.Router(); 

curiosity.get('/:date', function(req, res, next) {
  requestHttp('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + req.params.date + '&api_key=XXXXXXXXXXXXXXXXXXXXXXXXX',
    function(error, response, body) {
      var photos = JSON.parse(body).photos;
      var img_src = {};
      for (var i = 0; i < photos.length; i++) {
        img_src[i] = photos[i].img_src;
      }
      res.send(img_src);
    });
});

module.exports = curiosity;