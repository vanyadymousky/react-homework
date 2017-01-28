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
                modules: [ process.cwd(), 'node_modules' ],
                extensions: ['.js', '.jsx']
            },
            module: {
                rules: [
                    {
                        test: /\.js[x]*$/,
                        loader: 'babel-loader'
                    }, {
                        test: /\.css$/,
                        loader: 'ignore-loader'
                    }, {
                        test: /\.scss$/,
                        loader: 'ignore-loader'
                    }
                ]
            },
            externals: {
                'react/addons': 'react',
                'react/lib/ExecutionEnvironment': 'react',
                'react/lib/ReactContext': 'react'
            },
            plugins: [
                new webpack.ProvidePlugin({
                    'React': 'react'
                })
            ]
        },
        plugins: [
            'karma-jasmine', 'karma-webpack', 'karma-sourcemap-loader', 'karma-chrome-launcher'
        ],
        webpackServer: {
            noInfo: true
        }
    });
};
