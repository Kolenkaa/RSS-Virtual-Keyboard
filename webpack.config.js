const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'RSS Virtual Keyboard',
			filename: 'index.html',
			template: 'src/index.html'
		}),
		new MiniCssExtractPlugin(),
		new ESLintPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [					
					MiniCssExtractPlugin.loader,					
					"css-loader",				
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	devServer: {
		static: './dist',
		port: 8080,
		hot: true,
		open: true,
		watchFiles: ["src/**/*.html"],
	},

};