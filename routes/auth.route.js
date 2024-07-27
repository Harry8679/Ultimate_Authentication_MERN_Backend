const express = require('express');
const authRoute = express.Router();

authRoute.get('/signup', (req, res) => {
    res.json({
        data: 'You hit signup endpoint'
    });
});

module.exports = authRoute;