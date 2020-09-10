const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],

    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            { test: /\.css$/, use: 'css-loader' },
        ],
    },
};
