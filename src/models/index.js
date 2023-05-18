`use strict`;

const { Sequelize, DataTypes } = require('sequelize');
const customer = require('./customer');
const order = require('./order');


// will make dynamic for testing environment
const DATABASE_URL = process.env.DATABASE_URL;

//database singleton
const SequelizeDatabase = new Sequelize(DATABASE_URL);

//create our working aod connected customer database model
const customerModel = customer(SequelizeDatabase, DataTypes);

const orderModel = order(SequelizeDatabase, DataTypes); 

module.exports = {
SequelizeDatabase,
customerModel,
orderModel,
};