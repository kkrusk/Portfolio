const { sign, verify } = require('jsonwebtoken')
const jwtConfig = require('../config/jwtConfig.json') //COOKIES ARE NOT STORED IN LOCALHOST ON CHROME

const createToken = (user) => {
    const accessToken = sign({
        username: user.username,
        id: user.id
    }, jwtConfig.tokenHashPassword); //can take 3rd param for how long cookie lasts

    return accessToken
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies[jwtConfig.tokenName]
    if (!accessToken) {
        return res.status(400).json({ error: 'User not authenticated' });
    } else {
        try {
            const validToken = verify(accessToken, jwtConfig.tokenHashPassword) //verify() is a function from jsonwebtoken to verify(get) your cookie
            if (validToken) {
                req.authenticated = true //req.XXX allows creation of request variables through express
                req.username = validToken.username
                return next();
            }
        } catch (e) {
            return res.status(400).json({ error: e })
        }
    }
}

module.exports = { createToken, validateToken }