const DIST_FOLDER = 'dist';

let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    Dashboard = require('webpack-dashboard'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    autoprefixer = require('autoprefixer');

const cwd = process.cwd()

module.exports = {
    output: {
        path: path.join(cwd, DIST_FOLDER),
        publicPath: 'http://127.0.0.1:7777/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        modules: [ cwd, 'node_modules' ],
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    entry: {
        app: path.join(cwd, 'src/index'),
        vendor: ['react', 'react-dom', 'redux-observable', 'material-design-lite'],
    },
    module: {
        rules: [
            {
                test: /\.js[x]*$/,
                loader: 'babel-loader',
                include: path.join(cwd, 'src')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        'css-loader',
                        'postcss-loader'
                    ]
                })
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [ autoprefixer({ browsers: ['last 5 versions'] }) ]
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new DashboardPlugin(new Dashboard().setData)
    ]
};
