const DIST_FOLDER = 'dist';

let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    Dashboard = require('webpack-dashboard'),
    DashboardPlugin = require('webpack-dashboard/plugin');

const cwd = process.cwd()

module.exports = {
    output: {
        path: path.join(cwd, DIST_FOLDER),
        publicPath: 'http://127.0.0.1:7777/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        root: cwd,
        modulesDirectories: [cwd, 'node_modules']
    },
    entry: {
        app: path.join(cwd, 'src/index'),
        vendor: ['react', 'react-dom', 'material-design-lite'],
    },
    module: {
        loaders: [
            {
                test: /\.js[x]*$/,
                loader: 'babel',
                include: path.join(cwd, 'src')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader?sourceMap'
                ])
            },{
                test: /\.scss/,
                loader: ExtractTextPlugin.extract([
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap',
                    'sass-resources'
                ])
            }
        ]
    },
    sassResources: 'src/scss-resources/*.scss',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new DashboardPlugin(new Dashboard().setData)
    ],
    devtool: 'source-map'
};
