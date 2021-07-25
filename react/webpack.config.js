const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
		clean: true,
		publicPath: "/",
	},
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
	resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
	devServer: {
		historyApiFallback: true,
		contentBase: "./dist",
		compress: true,
		port: 8080,
		proxy: {
			"/api": {
				target: "http://127.0.0.1:5000/",
				secure: false,
				changeOrigin: true,
			},
		},
	},
	devtool: "eval-cheap-module-source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, "src"),
				loader: "babel-loader",
			},
			{
				test: /\.(css|s[ac]ss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, ".", "index.html"),
		}),
	],
};
