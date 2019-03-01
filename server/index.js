const express = require('express');
const path = require('path');

const app = express();
const routes = express.Router();

routes.route('/search').post((request, response) => {
  console.log('/search')
})

const port = 4200

const server = app.listen(() => {
  console.log(`Listening on port ${port}.`)
})