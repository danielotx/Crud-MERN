const express = require('express');
const routes = require('../route/tasks.route');

const app = express();
app.use(express.json());

app.use('/', routes);

app.get('/', (_request, response) => {
  response.send();
});


module.exports = app;