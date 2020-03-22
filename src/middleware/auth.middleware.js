const jwt = require('jsonwebtoken');
const path = require('path');
process.env["NODE_CONFIG_DIR"] = path.join(__dirname, '..', 'config');
const config = require('config');


module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"

        if (!token) {
          return res.status(401).json({message: 'unauthorized'});
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded;
        next();

    } catch (e) {
        res.status(401).json({message: 'unauthorized'})
    }
}