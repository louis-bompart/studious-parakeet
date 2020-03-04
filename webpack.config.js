const path = require('path');

module.exports = {
    entry: { myApp: path.join(__dirname, 'src/myFile.ts') },
    output: {
        filename: '[name].js',
        library: 'myLib',
        libraryTarget: 'var',
        path: path.join(__dirname, 'bin')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    mode: 'production',
    optimization: {

        minimize: false,
        usedExports: true,
        sideEffects: true
    },
};
