const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

app.listen(config.port, () => {
  console.log('listening to port: ', config.port);
})
