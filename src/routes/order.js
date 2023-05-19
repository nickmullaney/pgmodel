`use strict`;
const express = require('express');
const { order } = require('../models');
const router = express.Router();

//updated to work with the collections model
router.get('/order', async(req, res, next) =>{
  const orders = await order.read();
  res.status(200).send(orders);
});

//updated to work with the collections model
router.get('/order/:id', async(req, res, next) =>{
  const updatedOrder = await order.read(req.params.id);
  res.status(200).send(updatedOrder);
});

//updated to work with the collections model
router.post('/order', async(req, res, next) =>{
  const orders = await order.create(req.body);
  res.status(200).send(orders);
});

router.put('/order/:id', async(req, res, next) =>{
  const updatedOrder = await order.update(req.body, {where: {id: req.params.id}});
  res.status(200).send(updatedOrder);
});

module.exports = router;