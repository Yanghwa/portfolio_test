let express = require('express');
let router = express.Router();

let Blog = require('../models/blog');

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

module.exports = router;