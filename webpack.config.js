let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {test: /\.(html)$/, use: "html-loader"}
        ]
    }
};