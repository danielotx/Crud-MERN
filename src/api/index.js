const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send();
});


module.exports = app;