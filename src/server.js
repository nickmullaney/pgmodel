`use strict`;

const express = require('express');
const cors = require('cors');
const { customerModel } = require('./models');

const app = express();
app.use(cors());
// otherwise you wont see json in the body of the request
app.use(express.json());
// TODO get this working
const customerRouter = require('./routes/customer');
const { port } = require('pg/lib/defaults');

app.get('/', (req, res, next) => {
  res.status(200).send('Proof of life');
})

app.get('/customer', async (req, res, next) => {
  let customers = await customerModel.findAll();

  res.status(200).send(customers);
});

app.post('/customer', async (req, res, next) => {
  let newCustomer = await customerModel.create(req.body);
  res.status(200).send(newCustomer);
});

const start = (port) => { app.listen(port, () => console.log('Server running on ', port)) };

module.exports = {
  app,
  start
};
