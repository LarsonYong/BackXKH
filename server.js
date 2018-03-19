/**
 * Created by Jack on March 8 2018
 */

var express = require('express');
var path = require('path');
var fs = require('fs')
var https = require('https')
var bodyParser = require('body-parser');
// var privateKey = fs.readFileSync('/var/services/homes/Larson/private/private.pem', 'utf8')
// var certificate = fs.readFileSync('/var/services/homes/Larson/private/file.crt', 'utf8')
var privateKey = fs.readFileSync('/Users/jianboyang/Desktop/BackXKH/private/private.pem', 'utf8')
var certificate = fs.readFileSync('/Users/jianboyang/Desktop/BackXKH/private/file.crt', 'utf8')
var credentials = {key :privateKey, cert: certificate}

var api = require('./routes/api');




var port = 4205;
var sslport = 4206;
var app = express();
var httpsServer = https.createServer(credentials, app);
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);

app.listen(port, function() {
  console.log('HTTP Server Started AT' + port);
})

httpsServer.listen(sslport, function() {
  console.log('HTTPS server Started AT' + sslport);
})
