var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', extara : 'Junghwan Yang\'s about' });
});

router.get('/blog', function(req, res, next) {
  res.render('index', { title: 'Blog', extara : 'Junghwan Yang\'s products' });
});

// router.get('/services', function(req, res, next) {
//   res.render('index', { title: 'Services', extara : 'Junghwan Yang\'s services' });
// });

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', extara : 'Junghwan Yang\'s contact' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', extara : 'Junghwan Yang\'s page' });
});

module.exports = router;
