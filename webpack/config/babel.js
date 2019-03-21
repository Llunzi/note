var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const package1 = require('./package.json')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const GLOBALS = {
	"process.env.NODE_ENV": JSON.stringify("production"),
	__DEV__: false,
	TRANSLATE_ENABLED: false,
	MULTI_LANGUAGE: false,
	JD: true,
	Type: 3,
	LOG_ENABLE: false
};

const v = new Date().getTime(),
	bundle = "bundle_" + v,
	google_protobuf = "google_protobuf_" + v;

var chunksort = ["manifest", bundle];

module.exports = {
	//devtool: 'source-map',
	entry: {
		[bundle]: ['./src/index']
	},
	target: "web",
	output: {
		path: path.resolve(__dirname, "dist/js"),
		publicPath: './js/',
		filename: '[name].js',
		chunkFilename: '[name].[hash].bundle.js',
	},
	externals: {
		echarts: 'echarts',
		lodash: 'lodash',
		antd: 'antd',
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.DefinePlugin(GLOBALS),
	/*	new ExtractTextPlugin({
			filename: '[name].[hash].css'
		}),*/
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			options: {
				noInfo: false,
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			comments: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 1024 * 300 // Minimum number of characters
		}),
		new webpack.HashedModuleIdsPlugin(),
		new HtmlWebpackPlugin({
			title: package1.title,
			template: "./template.html",
			filename: "../index.html",
			elrectronRender: "",
			favicon: 'favicon.ico',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			chunksSortMode: function(a, b) {
				var aIndex = chunksort.indexOf(a.names[0]);
				var bIndex = chunksort.indexOf(b.names[0]);
				aIndex = aIndex < 0 ? chunksort.length + 1 : aIndex;
				bIndex = bIndex < 0 ? chunksort.length + 1 : bIndex;
				return aIndex - bIndex;
			},
			corejs: '<script src="./js/core.min.js"></script>',
			vendor: '<script type="text/javascript" src="./js/vendor.4.dll.js"></script>',
		}),
		new CopyWebpackPlugin([{
			from: "./static/js",
			to: '.'
		}]),
		new webpack.DllReferencePlugin({
			context: path.resolve(__dirname),
			manifest: require('./static/vendor-manifest.json')
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|en_us/),
		//new BundleAnalyzerPlugin()
	],
	// alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
	resolve: {
		extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
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
			"store": path.resolve(__dirname, "src/store")
		},
		cacheWithContext: false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				use: 'babel-loader'
			},
			/*{
				test: /\.(css|scss)$/,
				use:
					ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: ["css-loader", "sass-loader"]
					})

			},
			{
				test: /\.(less)$/,
				use:
					ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							"css-loader",
							{
								loader: "less-loader",
								options: {
									modifyVars: {
										'@icon-url': '"../../../../../src/public/font/font_zck90zmlh7hf47vi"'
									}
								}
							}
						]
					})
				
			},*/
			{
				test: /\.(svg|eot|ttf|woff|woff2)$/,
				use: ['file-loader?limit=5000&name=fonts/[name].[ext]']
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
				test: /\.(jpe?g|png|gif|mp3|mp4|ico)$/i,
				use: ['file-loader?name=[name].[ext]'],
				exclude: [
					path.join(__dirname, "src/public/images/emoji"),
					path.join(__dirname, "src/public/images/skin"),
					path.join(__dirname, "src/public/images/webviewtype"),
				]
			},
			{
				test: /\.(png)$/i,
				include: path.join(__dirname, "src/public/images/emoji"),
				use: ["file-loader?name=emoji/[name].[ext]"]
			},
			{
				test: /\.(png)$/i,
				include: path.join(__dirname, "src/public/images/skin"),
				use: ["file-loader?name=skin/[name].[ext]"],
				exclude: path.join(__dirname, "src/public/images/skin/thumbnails")
			},
			{
				test: /\.(png)$/i,
				include: path.join(__dirname, "src/public/images/skin/thumbnails"),
				use: ["file-loader?name=skin/thumbnails/[name].[ext]"]
			},
			{
				test: /\.(png)$/i,
				include: path.join(__dirname, "src/public/images/webviewtype"),
				use: ["file-loader?name=webview/[name].[ext]"]
			}
		]
	}
};