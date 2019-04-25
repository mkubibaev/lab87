const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch {
        res.sendStatus(500);
    }

});

module.exports = router;
