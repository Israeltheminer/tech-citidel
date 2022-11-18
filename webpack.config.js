const path = require("path")
const source = path.resolve(__dirname, "src")

module.exports = {
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js"
	},
	devServer: {
		static: source,
		port: 3030,
		open: true,
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: source,
				exclude: /node_modules/,
				resolve: {
					extensions: [".js", ".jsx"]
				},
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.css$/,
				include: source,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: "file-loader"
					}
				]
			}
		]
	}
}
