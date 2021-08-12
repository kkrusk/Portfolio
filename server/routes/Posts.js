const express = require('express')
const router = require('express').Router()
const { Posts } = require('../models')

router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts)
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id); //find by primary key function in sequelize
    res.json(post)
})

router.post('/', async (req, res) => { //async post request -- await waits for insert before continuing
    const post = req.body;
    await Posts.create(post)
    res.json(post)
})

module.exports = router;