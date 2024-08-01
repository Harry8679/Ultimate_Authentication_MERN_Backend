const nodemailer = require('nodemailer');
require('dotenv').config(); // Charger les variables d'environnement

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
