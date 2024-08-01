const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailData = {
  from: process.env.EMAIL_FROM,
  to: 'rudolph.ebang@gmail.com',
  subject: 'Test Email from SendGrid',
  text: 'This is a test email from SendGrid.',
  html: '<strong>This is a test email from SendGrid.</strong>',
};

sgMail
  .send(emailData)
  .then(() => {
    console.log('Test Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending Test Email:', error);
  });
