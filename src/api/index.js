const express = require('express');
const routes = require('../route/tasks.route');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);


app.get('/', (_request, response) => {
  response.send();
});


module.exports = app;