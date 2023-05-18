`use strict`;
const express = require('express');
const { orderModel } = require('../models');
const router = express.Router();

router.get('/order', async(req, res, next) =>{
  const orders = await orderModel.findAll();
  res.status(200).send(orders);
});

router.post('/order', async(req, res, next) =>{
  const orders = await orderModel.create(req.body);
  res.status(200).send(orders);
});

module.exports = router;