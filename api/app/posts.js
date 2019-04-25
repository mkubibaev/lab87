const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post
            .find()
            .select(['user', 'title', 'image', 'datetime'])
            .populate({path: 'user', select: 'fullName'});

        return res.send(posts);
    } catch {
        return res.sendStatus(500)
    }
});




module.exports = router;
