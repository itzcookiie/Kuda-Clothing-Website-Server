"use strict";
const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },{});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};


export default userModel