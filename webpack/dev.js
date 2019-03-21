const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('development'),
	__DEV__: true,
	TRANSLATE_ENABLED: true,
	MULTI_LANGUAGE: true,
	JD: true,
	Type: 2,
	LOG_ENABLE: false
};

module.exports = {
	//插件项
	devtool: 'inline-source-map',
	entry: {
		//vendor: ['react', 'react-dom'],
		app: './src/index.js'
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, "dist/js"),
		publicPath: '/dist/js/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin(GLOBALS),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: 'config'
		}),
		//  new webpack.optimize.CommonsChunkPlugin({
		//    name: 'vendor'
		// }),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.LoaderOptionsPlugin({
			options: {
				noInfo: false,
				debug: true,
			}
		}),
		new CopyWebpackPlugin([{
			from: "./static/js",
			to: '.'
		}]),
		new webpack.IgnorePlugin(/^electron$/)
	],
	devServer: {
		hot: true,
		inline: true,
		publicPath: '/dist/js/',
		contentBase: './',
		//自定义端口号
		port: '8080',
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js', '.jsx', '.less', '.scss', '.css', "ico"],
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.join(__dirname, './src')
		],
		alias: {
			"actions": path.resolve(__dirname, "src/actions"),
			"components": path.resolve(__dirname, "src/components"),
			"apps": path.resolve(__dirname, "src/apps"),
			"reducers": path.resolve(__dirname, "src/reducers"),
			"utils": path.resolve(__dirname, "src/utils"),
			"im": path.resolve(__dirname, "src/im"),
			"lib": path.resolve(__dirname, "src/lib"),
			"core": path.resolve(__dirname, "src/core"),
			"locale": path.resolve(__dirname, "src/locale"),
			"public": path.resolve(__dirname, "src/public"),
			"store": path.resolve(__dirname, "src/store"),
			'react-dom': 'react-dom/profiling',
			'scheduler/tracing': 'scheduler/tracing-profiling',
			// 'react': isPro ? 'preact-compat/dist/preact-compat' : 'react', //如果你不想要preact，可以删除这一行
			//'react-dom': isPro ? 'preact-compat/dist/preact-compat' : 'react-dom', //如果你不想要preact，可以删除这一行
			// 'create-react-class': 'preact-compat/lib/create-react-class' //如果你不想要preact，可以删除这一行
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(less)$/,
				use: ["style-loader", "css-loader",
					{
						loader: "less-loader",
						options: {
							modifyVars: {
								'@icon-url': '"../../../../../src/public/font/font_zck90zmlh7hf47vi"'
							}
						}
					}]
			},
			{
				test: /\.(svg|eot|ttf|woff|woff2)$/,
				use: ['file-loader?limit=5000&name=fonts/[name].[ext]']
			},
			{
				test: /\.(jpe?g|png|gif|mp3|mp4|ico)$/i,
				use: ['file-loader?name=[name].[ext]']
			}
		]
	}
};
