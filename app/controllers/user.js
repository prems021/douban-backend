var express = require('express')
var router = express.Router()
var Sequelize = require('sequelize');
var validator = require('validator')
var jwt = require('jsonwebtoken')

module.exports = function (app) {
  app.use('/user', router)
}


router.get('/somple', function (req, res, next)  {
   var sequelize = new Sequelize('tas', 'root', 'arshavin021', {
  host: 'localhost',
  dialect: 'mariadb',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

 
});

   
   sequelize.query("SELECT * FROM `tas_users`", { type: sequelize.QueryTypes.SELECT})
  .then(function(users) {
   response.json(users);
  })
});



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
