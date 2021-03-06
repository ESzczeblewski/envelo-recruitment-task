const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: '/docs/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};