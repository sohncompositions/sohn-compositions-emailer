const express = require('express');
const { emailerRoute } = require('./routes/emailer');
const { handleError } = require('./middleware/error');
const { cors } = require('./middleware/auth');
const { sources, originWhiteList } = require('./config');

const app = express();

app.use(
    cors(originWhiteList),
    express.json(),
    express.static(sources.CLIENT_PATH)
);
app.use('/api/emailer', emailerRoute);
app.get('*', (req, res) => res.sendFile(sources.CLIENT_HTML))
app.use(handleError);

module.exports.app = app;