/**
 * Created by Jack on 03/08
 */
var express=require('express');
var http =require('http');
var router=express.Router();
var app = express();
var bodyParser = require('body-parser');
var request = require('request');


//Get default
router.get('/', function(req,res,next) {
  res.send('Success!')
  console.log("Success!")
})

//Test
router.get('/test', function(req,res,next) {
  var options = {
    url: 'https://api.douban.com/v2/movie/search?q=搏击俱乐部',
    method: 'GET'
  }
  console.log(options.url);
  request(options, function (err, response, body) {
    console.log(body);
    res.send(body);
  })
})

//Get HHXD
router.get('/HHXD', function(req,res,next) {
  const movieID = 6390825;
  var options = {
    url: 'https://api.douban.com/v2/movie/subject/' + movieID,
    method: 'GET'
  }
  console.log(options.url);
  request(options, function (err, response, body) {
    console.log(body);
    res.send(body);
  })
})

//Get movie by ID
router.get('/movie/:movieID', function(req,res,next) {
  const movieID = req.params.movieID;
  var options = {
    url: 'https://api.douban.com/v2/movie/subject/' + movieID,
    method: 'GET'
  }
  console.log(options.url);
  request(options, function (err, response, body) {
    console.log(body);
    res.send(body);
  })
})

//Seach by name
router.get('/search/:name', function(req,res,next) {
  const name = req.params.name;
  var options = {
    url: 'https://api.douban.com/v2/movie/search?q=' + name,
    method: 'GET'
  }
  console.log(options.url);
  request(options, function( err, response,body) {
    console.log(body);
    res.set({'content-type':'application/json; charset=utf-8'})
    res.send(body);
  })
})

//Get in theaters
router.get('/in_theaters', function(req,res,next) {
  var options = {
    url: 'https://api.douban.com/v2/movie/in_theaters',
    method:'GET'
  }
  console.log(options.url)
  request(options, function(err, response, body) {
    console.log(body);
    res.send(body);
  })
})

//Get coming sooning
router.get('/coming_soon', function(req,res,next) {
  var options = {
    url: 'https://api.douban.com/v2/movie/coming_soon',
    method:'GET'
  }
  console.log(options.url)
  request(options, function(err, response, body) {
    console.log(body);
    res.send(body);
  })
})

//Get weekly
router.get('/weekly', function(req,res,next) {
  var options = {
    url: 'https://api.douban.com/v2/movie/weekly',
    method:'GET'
  }
  console.log(options.url)
  request(options, function(err, response, body) {
    console.log(body);
    res.send(body);
  })
})

//Get new movie
router.get('/new_movies', function(req,res,next) {
  var options = {
    url: 'https://api.douban.com/v2/movie/new_movies',
    method:'GET'
  }
  console.log(options.url)
  request(options, function(err, response, body) {
    console.log(body);
    res.send(body);
  })
})


//Get us weekly
router.get('/us_box', function(req,res,next) {
  var options = {
    url: 'https://api.douban.com/v2/movie/us_box',
    method:'GET'
  }
  console.log(options.url)
  request(options, function(err, response, body) {
    console.log(body);
    res.send(body);
  })
})

module.exports=router;
