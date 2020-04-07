const dotenv = require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const server = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-zf6t1.gcp.mongodb.net/oministack8?retryWrites=true&w=majority`, {useUnifiedTopology:true, useNewUrlParser:true})

server.use(express.json());
server.use(routes)

server.listen(3333, () => {
  console.log('Servidor rodando...')
})