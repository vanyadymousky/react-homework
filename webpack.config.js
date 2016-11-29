const DIST_FOLDER = 'dist';

let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    Dashboard = require('webpack-dashboard'),
    DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    output: {
        path: path.join(__dirname, DIST_FOLDER),
        publicPath: 'http://127.0.0.1:7777/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        root: __dirname,
        modulesDirectories: [__dirname, 'node_modules']
    },
    entry: {
        app: path.join(__dirname, 'src/index'),
        vendor: ['react', 'react-dom', 'material-design-lite'],
    },
    module: {
        loaders: [
            {
                test: /\.js[x]*$/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
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
