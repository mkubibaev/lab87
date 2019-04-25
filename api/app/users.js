const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);

        user.generateToken();
        await user.save();

        return res.send({message: 'User registered', user});
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/sessions', async (req, res) => {
    const user = await User.findOne({login: req.body.login});

    if (!user) {
        return res.status(400).send({message: 'username or password incorrect'});
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) {
        return res.status(400).send({message: 'username or password incorrect'});
    }

    user.generateToken();
    await user.save();

    return res.send({message: 'Login successful', user});
});

module.exports = router;
