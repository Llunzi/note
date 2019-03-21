var path = require("path");
var webpack = require("webpack");
var v = 4;

module.exports = {
	// 你想要打包的模块的数组
	entry: {
		vendor: ["react", 'react-dom', "redux", "react-redux", "react-router-redux", "react-router-dom",
			"draft-js-export-html", "immutable", "prop-types", "md5", "events",
			"fetch-ie8", "isomorphic-fetch", "uuid", "store", "redux-promise",
			"lodash.clonedeep", "lodash.isobject"]
	},
	output: {
		path: path.join(__dirname, './static/js'), // 打包后文件输出的位置
		filename: '[name].' + v + '.dll.js',
		library: '[name]_library'
		// vendor.dll.js中暴露出的全局变量名。
		// 主要是给DllPlugin中的name使用，
		// 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, './static', '[name]-manifest.json'),
			name: '[name]_library',
			context: __dirname
		}),
		// 压缩打包的文件，与该文章主线无关
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|en_us/)
	]
};
