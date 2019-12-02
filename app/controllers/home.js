var express = require('express');
var router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Kshethra server'
  });
});


router.get('/api', function (req, res, next) {
   response.json({
        Devoloper: "Premji Thankaji",
        Framework: "A7.0 + sequlize + nodejs",
    });
});


