const express = require('express')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const { Users } = require('../models')
const { createToken } = require('../JWT')

router.get("/", async (req, res) => {

});

router.post('/register', async (req, res) => { //insert users into db
    const { username, password } = req.body; //object destructuring instead of assigning to variable allows us to access the username and password individually in order to hash the fields
    bcrypt.hash(password, 10).then((hash) => { //2nd parameter is called salt rounds, the higher the more scrambled the hash becomes
        Users.create({
            username: username,
            password: hash
        }).then(() => {
            res.json('Successfully registered:  ' + username)
        }).catch((err) => {
            if (err) {
                res.status(400).json({ error: err });
            }
        })
    })
})

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
        res.json({ error: "User doesn't exist" });
    } else {
        const dbPassword = user.password;
        bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) {
                res.status(400).json({ error: "Username + Password combo does not exist" })
            } else {
                const accessToken = createToken(user, 'jwtsecretplschange') //sign takes data that you want to keep track of, second param is a secret hashed password that protects token
                //res.cookie("access-token", accessToken, { maxAge: 36000000 }) //res.cookie params take name|data|{option: val} -- http://expressjs.com/en/api.html
            }
        })
    }
});

module.exports = router;