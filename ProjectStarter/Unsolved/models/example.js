module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    score: DataTypes.INTEGER
  },{timestamps: false});
  return User;
};
