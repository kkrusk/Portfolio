const { sign, verify } = require('jsonwebtoken')

const createToken = (user) => {
    const accessToken = sign({
        username: user.username,
        id: user.id
    }, 'jwtsecretplschange'); //create .env file to hold JWT password DO NOT LEAVE HERE -- can take 3rd param for how long cookie lasts

    return accessToken
};

module.exports = { createToken }