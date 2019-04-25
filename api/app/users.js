const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch {
        res.sendStatus(500);
    }

});

module.exports = router;
