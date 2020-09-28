const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');

if(process.env.NODE_ENV) {
	console.log(`Running as ${process.env.NODE_ENV}`);
}

module.exports = {
	mode: "production",
	devtool : 'source-map',
	plugins : [
		new UglifyJsPlugin({
			sourceMap: true,
			uglifyOptions: {
				ie8: false,
				mangle: {
					toplevel: true
				},
				compress: {
					drop_console : true
				},
				output: {
					comments: false
				}
			}
		}),
		new DefinePlugin({
            'INIT_USER_VALUE': null
		}),
		new CompressionWebpackPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html|css)/,
			threshold: 10240,
			minRatio:0.8
		})		
	]
}