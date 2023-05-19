`use strict`;

const express = require('express');

const router = express.Router();
const { customerModel, orderModel } = require('../models');

app.get('/customer', async (req, res, next) => {
  let customers = await customerModel.findAll();

  res.status(200).send(customers);
});

//this works to connect the orders to the customers 
app.get('/customerWithOrders', async (req, res, next) => {
  let customers = await customerModel.findAll({ include: { model: orderModel } });

  res.status(200).send(customers);
});

// Finds customer with single order
app.get('/customerWithSingleOrders/:id', async (req, res, next) => {
  let customers = await customerModel.findAll({
    include: { model: orderModel },
    where: { id: req.params.id }
  });

  res.status(200).send(customers);
});

app.get('/customer/:id', async (req, res, next) => {
  let singleCustomer = await customerModel.findAll({ where: { id: req.params.id } });

  res.status(200).send(singleCustomer);
});

app.post('/customer', async (req, res, next) => {
  let newCustomer = await customerModel.create(req.body);
  res.status(200).send(newCustomer);
});