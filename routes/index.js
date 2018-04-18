var express = require('express');
var router = express.Router();
var user_bus=require('../db/user_bus')

/* GET home page. */
router.get('/', function(req, res, next) {

  //user_bus.insert({name:"hd",pwd:"123"})
  res.render('index', { title: 'Express' });
});

module.exports = router;
