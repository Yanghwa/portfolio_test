let mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: 'Post Title is required'
	},
	date: {
		type: Date,
		required: 'Data is required',
		default: Date.now
	},
	content: {
		type: String,
		required: 'Content is required'
	}
}, { collection : 'blog' });

module.exports = mongoose.model('Blog', blogSchema);