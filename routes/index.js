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
router.post('/contact', function (req, res) {
	let message, smtpTrans;

	//set the service to send the mail using this
	smtpTrans = nodemailer.createTransport({
	  service: 'Gmail',
	  auth: {
		  	// type: 'OAuth2',
	        user: 'kellerj87@gmail.com',
	        // accessToken: "ya29.GlvoA90k1ILgXW1j76M_-WSJHpQNW-PyTr4BWNgWyK3ZZwhPJSs9PVZd32tD_xiZSh_dKT92gkDDJPuO4lMAKEj66pS5961LsB4IaqzJHFpIuMhc7-TOVEhh4Puy"
	        pass: 'wjdfmd87'
	      }
	});

	//set message content
	message = {
	  from: req.body.email,
	  to: 'kellerj87@gmail.com',
	  subject: 'Contact to Junghwan from ' + req.body.name + req.body.email,
	  text: req.body.message + '- Cellphone: ' + req.body.phonenumber
	};

	//sendMail and detect error
	smtpTrans.sendMail(message, function (error, response) {
	  if (error) {
	      res.render('./partials/contact', { title: 'Junghwan - Contact Failure', msg: 'Error occured, message not sent.', err: true, page: 'contact'});
	  }
	  else {
	      res.render('./partials/contact', { title: 'Junghwan - Contact Success', msg: 'Message sent! Thank you.', err: false, page: 'contact'});
	  }
	});
});

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
