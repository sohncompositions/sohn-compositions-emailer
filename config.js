require('dotenv').config();
const path = require('path');

module.exports.sources = {
    CLIENT_PATH: path.resolve(__dirname),
    CLIENT_HTML: path.resolve(__dirname, 'index.html'),
}