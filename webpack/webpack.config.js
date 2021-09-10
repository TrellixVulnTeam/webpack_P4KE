//Import 
const path = require('path')

//Installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');


//All Rules
module.exports = {

    //Entry Files > index.js 
    entry: "./src/scripts/index.js",

    //Output
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    //Dev Server 
    devServer: {
        open: true,
        compress: true
    },
    module: {
        rules: [
            {
                //Babel Loader
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env"]
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                //SASS Loader
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),

        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })

    ],

    mode: "development",
    // devtool: "source-map",


}

