var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ],
        singleRun: true,
        frameworks: [ 'jasmine' ],
        basePath: '../..',
        files: [
            'resources/webpack/testing.webpack.config.js'
        ],
        preprocessors: {
            'resources/webpack/testing.webpack.config.js': [ 'webpack', 'sourcemap' ]
        },
        reporters: [ 'dots' ],
        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                modules: [ process.cwd(), 'node_modules' ]
            },
            module: {
                rules: [
                    { test: /\.js$/, loader: 'babel-loader' }, {
                        test: /\.css$/,
                        loader: 'ignore-loader'
                    }, {
                        test: /\.scss$/,
                        loader: 'ignore-loader'
                    }
                ]
            }
        },
        plugins: [
            'karma-jasmine', 'karma-webpack', 'karma-sourcemap-loader', 'karma-chrome-launcher'
        ],
        webpackServer: {
            noInfo: true
        }
    });
};
