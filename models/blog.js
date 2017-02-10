//For the future, setting the blog contents' types

let mongoose = require('mongoose');

//make blogSchema and its types, then exports to mongoose model
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

//exports this model to mongooes
module.exports = mongoose.model('Blog', blogSchema);