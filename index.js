'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use('*', (req, res, next) => {
  console.log('code:', req.query.code);
  next();
});
app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log('Web Server up on port', PORT);
});
