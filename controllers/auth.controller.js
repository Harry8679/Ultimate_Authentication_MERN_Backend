const asyncHandler = require('express-async-handler');

exports.signup = asyncHandler((req, res) => {
    console.log('REQ BODY ON SIGNUP', req.body);
    res.json({
        data: 'You hit signup endpoint'
    });
});