const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailWithSendGrid = async (to, subject, text) => {
    const msg = {
        to: to,
        from: 'emarh.harry.code@gmail.com', // Utilisez l'adresse email vérifiée par SendGrid
        subject: subject,
        text: text,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error('Error sending email', error);
        if (error.response) {
            console.error(error.response.body);
        }
        throw new Error('Error sending email');
    }
};

module.exports = { sendEmailWithSendGrid };
