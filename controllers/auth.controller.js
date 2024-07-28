const asyncHandler = require('express-async-handler');

exports.signup = asyncHandler((req, res) => {
    res.json({
        data: 'You hit signup endpoint'
    });
});