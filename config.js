require('dotenv').config();
const path = require('path');

module.exports.sources = {
    CLIENT_PATH: path.resolve(__dirname),
    CLIENT_HTML: path.resolve(__dirname, 'index.html'),
}

module.exports.originWhiteList = process.env.ORIGIN_WHITELIST === undefined ?
    [] :
    process.env.ORIGIN_WHITELIST.split(' ')