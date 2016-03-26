var path = require('path');

module.exports = {
    entry: './example/example.js',
    output: {
        path: __dirname,
        filename: 'example.bundle.js'
    }
};