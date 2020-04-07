const express = require('express');
const DevController = require('./controllers/DevConstrollers');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');



const routes = express.Router();

routes.get('/', (req, res) => {
  let name = req.query.name
  
  res.json({"message":"Olá","name":name})
})

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);


routes.post('/devs/:devId/likes', LikeController.store);

routes.post('/devs/:devId/dislikes', DislikeController.store);


module.exports = routes
