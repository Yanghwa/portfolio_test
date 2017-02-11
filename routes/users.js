//File name: users.js
//Author's name: Junghwan Yang
//web site name: www.junghwanyang.me
//file description: default setting for users, not used yet

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
