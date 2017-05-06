module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tas_users', {
    ID: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USERNAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
    ROLE: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tas_users',
    timestamps: false
  });
};
