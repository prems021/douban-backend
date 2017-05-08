
var Sequelize = require('sequelize');
var sequelize = new Sequelize('tas', 'root', 'arshavin021',
                              {
  host: 'localhost',
  dialect: 'mariadb',
  

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
                             
});

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});






var express = require('express')
var router = express.Router()

var validator = require('validator')
var jwt = require('jsonwebtoken')

module.exports = function (app) {
  app.use('/user', router)
}



 router.get('/test', function (req, res, next)  {
sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {

res.json({
    title: 'Greetings.',
    text: 'Hello Angular 2'
  });

});
   });


