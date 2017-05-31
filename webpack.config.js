const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const DIST = path.resolve(__dirname, "./dist");
const SOURCE = path.resolve(__dirname, "source");
const NODE_MODULES = path.resolve(__dirname, "node_modules");
const paths = [
    SOURCE,
    path.resolve(__dirname, "node_modules/dropbox-fs"),
    path.resolve(__dirname, "node_modules/webdav-fs"),
    path.resolve(__dirname, "node_modules/webdav-client"),
    path.resolve(__dirname, "node_modules/any-fs")
];

module.exports = {

    entry: {
        "mobile-compat": path.resolve(__dirname, "./source/index.js")
    },

    module: {
        rules: [
            {
                test: /iconv/,
                use: "null-loader"
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [
                    ...paths
                ]
            }
        ]
    },

    node: {
        fs: "empty"
    },

    output: {
        path: DIST,
        filename: "[name].js",
        pathinfo: true
    },

    plugins: [
        new LodashModuleReplacementPlugin(),
        new UglifyJSPlugin({
            warningsFilter: () => false
        })
    ],

    resolve: {
        extensions: [".js"],
        modules: [
            SOURCE,
            NODE_MODULES
        ]
    }

};
