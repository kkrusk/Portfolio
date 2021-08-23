const express = require('express')
const router = require('express').Router()
const { Comments } = require('../models')
const { validateToken } = require('../middleware/JWT')

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({ where: { postId: postId } }); //Find secondary key of postId
    res.json(comments)
})

router.post('/', validateToken, async (req, res) => {
    const comment = req.body;
    const username = req.username;
    comment.username = username;
    await Comments.create(comment)
    res.json(comment)
})

module.exports = router;