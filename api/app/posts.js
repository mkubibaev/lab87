const express = require('express');

const router = express.Router();

const Post = require('../models/Post');
const auth = require('../middleware/auth');

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

router.get('/:id', async (req, res) => {
    try {
        const post = await Post
            .findById(req.params.id)
            .populate({path: 'user', select: 'fullName'});

        return res.send(post);
    } catch {
        return res.sendStatus(500)
    }
});

router.post('/', auth, async (req, res) => {
    if (req.body.description || req.body.image) {

        const post = new Post(req.body);
        post.user = req.user._id;
        post.published_at = new Date().toISOString();

        try {
            await post.save();
            return res.send(post);
        } catch (e) {
            return res.status(400).send(e);
        }

    } else {
        res.status(400).send({message: 'Add description or image'});
    }
});


module.exports = router;
