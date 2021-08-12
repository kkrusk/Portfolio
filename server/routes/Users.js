const express = require('express')
const router = require('express').Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

router.get("/", async (req, res) => {

});

router.post('/', async (req, res) => { //insert users into db
    const { username, password } = req.body; //object destructuring instead of assigning to variable allows us to access the username and password individually in order to hash the fields
    bcrypt.hash(password, 10).then((hash) => { //2nd parameter is called salt rounds, the higher the more scrambled the hash becomes
        Users.create({ username: username, password: hash })
        res.json('Successful insert of User: ' + username)
    })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });
    if (!user) {
        res.json({ error: "User doesn't exist" });
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res.json({ error: "Username + Password combo does not exist" })
            } else {
                res.json("Successfully logged in as " + username)
            }
        })
    }
});

module.exports = router;