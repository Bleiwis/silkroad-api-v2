const { DataTypes } = require("sequelize");

const User_model = sequelize.define("User", {
  // Model attributes are defined here
  // allowNull defaults to true
  StrUserID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Status: {
    type: DataTypes.STRING,
  },
  GMrank: {
    type: DataTypes.STRING,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  certificate_num: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  postcode: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  mobile: {
    type: DataTypes.STRING,
  },
  regtime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reg_ip: {
    type: DataTypes.STRING,
  },
});

module.exports = User_model;
