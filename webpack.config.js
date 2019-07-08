module.exports = {
    entry: './src/js/main',

    output: {
        filename: 'dist/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'cheap-module-inline-source-map'
};