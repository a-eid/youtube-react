let path = require('path')

module.exports = {
	entry : path.join(__dirname , 'src' , 'app.js'), 
	output :{
		path : 'dist', 
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{test : /\.js$/ , exclude:'node_modules' , loader:'babel-loader'}
		]
	}
}