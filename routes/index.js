//File name: index.js
//Author's name: Junghwan Yang
//web site name: www.junghwanyang.me
//file description: express router for every pages except blog

let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');

//router for career page
router.get('/career', function(req, res, next) {
  res.render('./partials/career', { title: 'Career', extara : 'Junghwan Yang\'s Career' });
});

//router for projects page
router.get('/projects', function(req, res, next) {
  res.render('./partials/projects', { title: 'Projects', extara : 'Junghwan Yang\'s Projects' });
});

//router for services page
router.get('/services', function(req, res, next) {
  res.render('./partials/services', { title: 'Services', extara : 'Junghwan Yang\'s Services' });
});

//router for contact page and setting nodemailer to send mail using contact form


//router for contact page
router.get('/contact', function(req, res, next) {
  res.render('./partials/contact', { title: 'Contact', extara : 'Junghwan Yang\'s Contact' });
});

//router for main page 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', extara : 'Junghwan Yang\'s Web Site' });
});

//export these all routers
module.exports = router;
