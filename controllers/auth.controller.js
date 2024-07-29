const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const { sendEmail } = require('../services/emailService'); // Assurez-vous que le chemin est correct

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

        // Envoyer un email de confirmation
        const subject = 'Signup Confirmation';
        const text = `Hello ${name},\n\nThank you for signing up! Please confirm your email address.`;
        await sendEmail(email, subject, text);

        res.json({
            message: 'Signup Success! Please check your email to confirm your registration.'
        });
    } catch (err) {
        console.log('SIGNUP ERROR', err);
        return res.status(400).json({
            error: err.message
        });
    }
});
