const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			},
			{
				test: /.*\.(gif|png|jpe?g|svg)$/i,
				use: {
					loader: 'file-loader'
				}
			}
		]
	}
}