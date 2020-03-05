const path = require('path');

module.exports = {
    entry: { myApp: path.join(__dirname, 'src/myFile.js') },
    output: {
        filename: '[name].js',
        library: 'myLib',
        libraryTarget: 'var',
        path: path.join(__dirname, 'bin')
    },
    mode: 'production',
    optimization: {
        minimize: false,
        usedExports: true,
        sideEffects: true
    },
};
