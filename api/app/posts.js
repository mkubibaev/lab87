const express = require('express');

const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

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

        const postData = req.body;
        postData.user = req.user._id;
        postData.published_at = new Date().toISOString();

        try {
            const post = new Post(postData);

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
