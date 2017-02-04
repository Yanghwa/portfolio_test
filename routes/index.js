let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');

router.get('/career', function(req, res, next) {
  res.render('./partials/career', { title: 'Career', extara : 'Junghwan Yang\'s Career' });
});

router.get('/blog', function(req, res, next) {
  res.render('./partials/blog', { title: 'Blog', extara : 'Junghwan Yang\'s Blog' });
});

router.get('/projects', function(req, res, next) {
  res.render('./partials/projects', { title: 'Projects', extara : 'Junghwan Yang\'s Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('./partials/services', { title: 'Services', extara : 'Junghwan Yang\'s Services' });
});

router.post('/contact', function (req, res) {
	let message, smtpTrans;

	smtpTrans = nodemailer.createTransport({
	  service: "Gmail",
	  auth: {
		  	type: 'OAuth2',
	        user: 'kellerj87@gmail.com',
	        accessToken: "ya29.GlvoA90k1ILgXW1j76M_-WSJHpQNW-PyTr4BWNgWyK3ZZwhPJSs9PVZd32tD_xiZSh_dKT92gkDDJPuO4lMAKEj66pS5961LsB4IaqzJHFpIuMhc7-TOVEhh4Puy"
	      }
	});
	message = {
	  from: req.body.email,
	  to: 'kellerj87@gmail.com',
	  subject: 'Contact to Junghwan from ' + req.body.name + req.body.email,
	  text: req.body.message + '- Cellphone: ' + req.body.phonenumber
	};
	smtpTrans.sendMail(message, function (error, response) {
	  if (error) {
	      res.render('./partials/contact', { title: 'Junghwan - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
	  }
	  else {
	      res.render('./partials/contact', { title: 'Junghwan - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
	  }
	});
});
router.get('/contact', function(req, res, next) {
  res.render('./partials/contact', { title: 'Contact', extara : 'Junghwan Yang\'s Contact' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', extara : 'Junghwan Yang\'s Web Site' });
});

module.exports = router;
