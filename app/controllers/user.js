
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

// Create user
router.post('/', function (req, res, next) {
  var email = req.body.email
  var pass = req.body.pass
  var name = req.body.name

  // Validator
  if (!validator.isEmpty(email) && !validator.isEmpty(name) &&
      !validator.isEmpty(pass) && validator.isEmail(email) &&
      validator.isLength(name, {min: 2, max: 10})) {
    // Generate token
    var token = jwt.sign({
      name: name,
      email: email,
      exp: Math.floor(Date.now() / 1000) + 600
    }, 'shxhxhxhx')

    res.status(200).send({
      name: name,
      email: email,
      token: token
    })
  } else {
    // Error handle
    res.status(400).send({
      error: 'Missing field'
    })
  }
})

// Get user
router.get('/:id', function (req, res, next) {
  // var id = req.params.id
  var token = req.get('Authorization').split(' ')[1]

  // Verify
  jwt.verify(token, 'shxhxhxhx', function (err, decoded) {
    // Error handle
    if (err) {
      // If the user is legitimate, but token fails
      // you can re generate token
      res.status(401).send({
        error: 'Invalid token'
      })
    } else {
      // Authorization sucess return token
      res.status(200).send({
        name: decoded.name,
        email: decoded.email,
        token: token
      })
    }
  })
})
//router.get('/somple', function (req, res, next)  {
  

//  var sequelize = new Sequelize('mysql://b204e93cac7161:cad08e55@us-cdbr-iron-east-03.cleardb.net:3306/heroku_fcbb3d9e4d63f93');

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

  
  
// // });
 router.get('/test', function (req, res, next)  {
sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {

res.send({"hi"});

});
   });

// var test = sql.authenticate()
//     .then(function () {
//         console.log("CONNECTED! ");
//     })
//     .catch(function (err) {
//         console.log("SOMETHING DONE GOOFED");
//     })
//     .done();
// });
// router.post('/logincheck', function (req, res, next) {
//    var sequelize = new Sequelize('tas', 'root', 'arshavin021', {
//   host: 'localhost',
//   dialect: 'mariadb',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },

 
// });

//     var User = sequelize.import(__dirname + "/models/tas_users")
//     var username = request.body.username;
//     var password = request.body.password;
// User.findOne({  where: { USERNAME: username,password: password }}).then(function (user) {
    
//     if(!user)
//     {

//       res.send({login:"user not exist"});
//     }

//     else 
//     {

       
//           res.send({ login: "login sucess",role: user.ROLE });
   
//     }
    
// })
// });


// router.get('/simple',function (req, res, next) {
//   var sequelize = new Sequelize('tas', 'root', 'arshavin021', {
//   host: 'localhost',
//   dialect: 'mariadb',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },

 
// });


  
//   res.json({
//     title: 'Greetings.',
//     text: 'Hello Angular 2'
//   });
// });

// Create user
