let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : {
		app : "./src/app.js" 
	}, 
	output :{
		path : 'dist', 
		filename : '[app].bundle.js'
	},
	// resolve:{
	// 	extensions : ['.js']
	// },
	module : {
		loaders : [
			{test : /\.js$/ , exclude:'node_modules' , loader:'babel-loader'}
		]
	},
	plugins : [new HtmlWebpackPlugin]
}