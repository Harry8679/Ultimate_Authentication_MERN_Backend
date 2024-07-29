const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'emarh.harry.code@gmail.com',
        pass: 'Davidvilla7'
    }
});

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: 'emarh.harry.code@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
