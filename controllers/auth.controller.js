const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Configuration de Nodemailer avec Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,  // Utilisez le mot de passe d'application ici
    },
});

exports.signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Rechercher un utilisateur avec le même email
        const user = await User.findOne({ email }).exec();
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            });
        }

        // Créer un token JWT pour l'activation du compte
        const token = jwt.sign({ name, email, password }, process.env.JWT_ACCOUNT_ACTIVATION, { expiresIn: '30m' });

        // Préparer les données de l'email
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Account activation link',
            html: `
                <h1>Please use the following link to activate your account</h1>
                <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                <hr />
                <p>This email may contain sensitive information</p>
                <p>${process.env.CLIENT_URL}</p>
            `
        };

        // Envoyer l'email d'activation
        await transporter.sendMail(mailOptions);

        return res.json({ message: `Email has been sent to ${email}. Follow the instruction to activate your account.` });
    } catch (err) {
        console.error('SIGNUP ERROR', err);  // Afficher l'erreur complète dans la console
        return res.status(400).json({
            error: 'Error sending email. Please try again later.'
        });
    }
});
