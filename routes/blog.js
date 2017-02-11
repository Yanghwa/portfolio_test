//File name: blog.js
//Author's name: Junghwan Yang
//web site name: www.junghwanyang.me
//file description: express router for blog

let express = require('express');
let router = express.Router();

//setting model- schema and set collection as blog
let Blog = require('../models/blog');

//render to blog view if there is no error
router.get('/', function(req, res, next) {
	Blog.find(function(err, blog) {
		if(err) {
			console.log(err);
			res.end(err);
			return;
		} else {
			console.log(blog);
			res.render('./partials/blog', { title: 'Blog', extara : 'Junghwan Yang\'s Blog', blogpost: blog });
		}
	});
	
});

//exports this blog router to module
module.exports = router;