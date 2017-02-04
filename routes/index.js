var express = require('express');
var router = express.Router();


router.get('/career', function(req, res, next) {
  res.render('./partials/career', { title: 'Career', extara : 'Junghwan Yang\'s Career' });
});

router.get('/blog', function(req, res, next) {
  res.render('./partials/blog', { title: 'Blog', extara : 'Junghwan Yang\'s Blog' });
});

// router.get('/services', function(req, res, next) {
//   res.render('index', { title: 'Services', extara : 'Junghwan Yang\'s services' });
// });

router.get('/contact', function(req, res, next) {
  res.render('./partials/contact', { title: 'Contact', extara : 'Junghwan Yang\'s Contact' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', extara : 'Junghwan Yang\'s Web Site' });
});

module.exports = router;
