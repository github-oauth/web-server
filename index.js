'use strict';

const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
  console.log('code:', req.query.code);
  next();
});
app.use(express.static('./public'));

app.listen(process.env.PORT, () => {
  console.log('Web Server up on port', process.env.PORT);
});
