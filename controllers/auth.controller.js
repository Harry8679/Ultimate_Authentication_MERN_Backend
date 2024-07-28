const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

exports.signup = asyncHandler(async (req, res) => {
    console.log('REQ BODY ON SIGNUP', req.body);
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            });
        }

        let newUser = new User({ name, email, password });

        await newUser.save();
        res.json({
            message: 'Signup Success! Please signin'
        });
    } catch (err) {
        console.log('SIGNUP ERROR', err);
        return res.status(400).json({
            error: err.message
        });
    }
});
