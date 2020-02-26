const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals")

module.exports = {
    mode: "development",
    target: "node",
    entry: ["./index.js", "./sass/main.scss"],

    // När webpack har packat klart allt så vill vi att dene ska skicka ut resultatet
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "boundle.js",
        publicPath: "./public"
    },
    // HÄr inne finns sass reglerna 
    module: {
        rules: [{
            // Denna kollar om någon av filerna slutar på sass eller scss
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "public/index.css"
        })
    ],
    externals: [nodeExternals()]
}

    