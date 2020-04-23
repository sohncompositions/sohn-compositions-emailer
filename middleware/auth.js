const cors = require('cors');

module.exports = {
    validateApiKey: (req, res, next) => {
        if (req.query.apiKey === process.env.APP_API_KEY) return next();

        res.status(401);
        return next(Error('Invalid API key'));
    },
    cors: (whitelist) => {
        const delegate = (req, cb) => {
            const config = {
                origin: (origin, cb) => {
                    console.log(req)
                    if (whitelist.includes(origin) || req.headers['user-agent'].match('PostmanRuntime')) cb(null, true);
                    else cb(new Error('Not allowed by CORS'))
                }
            }
            return cb(null, config);
        }
        return cors(delegate)
    }
}

