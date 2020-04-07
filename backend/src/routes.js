const express = require('express');
const DevController = require('./controllers/DevConstrollers')

const routes = express.Router();

routes.get('/', (req, res) => {
  let name = req.query.name

  res.json({"message":"Olá","name":name})
})

routes.post('/devs', DevController.store)

module.exports = routes
