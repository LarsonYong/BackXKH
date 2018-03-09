/**
 * Created by Jack on March 8 2018
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var api = require('./routes/api');

var port = 4205;
var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);

app.listen(port, function() {
  console.log('Server Started AT' + port);
})
