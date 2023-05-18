const { Sequelize, DataTypes } = require("sequelize");

`use strict`;

module.exports = (SequelizeDatabase, DataTypes) => {
  return SequelizeDatabase.define('orders', {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
