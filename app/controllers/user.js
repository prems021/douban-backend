
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://hnsflljkdhseyr:2b589c9e4a49c30f332004626be8846e241cd8c67d779fa2da179d20062bed87@ec2-54-235-119-27.compute-1.amazonaws.com:5432/d51q8k5ef5phcs');
 var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});
// var User = sequelize.define('tas_users', {
//     ID: {
//       type: DataTypes.INTEGER(4),
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     USERNAME: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     PASSWORD: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
   
//     ROLE: {
//       type: DataTypes.INTEGER(3),
//       allowNull: true,
//       defaultValue: '1'
//     }
//   }, {
//     tableName: 'tas_users',
//     timestamps: false
//   });






var express = require('express')
var router = express.Router()

var validator = require('validator')
var jwt = require('jsonwebtoken')

module.exports = function (app) {
  app.use('/user', router)
}



 router.get('/test', function (req, res, next)  {
   
   
  User.findAll({
  attributes: ['first_name', 'lastname']
}).then(function(users) {
   response.json(users);
  });
   
  

});
   
   
//  User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     USERNAME: 'John',
//     PASSWORD: 'Hancock'
//   });
// });
   });


