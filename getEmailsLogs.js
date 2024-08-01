const sgClient = require('@sendgrid/client');
const dotenv = require('dotenv');
dotenv.config();

sgClient.setApiKey(process.env.SENDGRID_API_KEY);

const request = {
  method: 'GET',
  url: '/v3/messages?limit=10',
};

sgClient
  .request(request)
  .then(([response, body]) => {
    console.log('SendGrid Email Logs:', body);
  })
  .catch((error) => {
    console.error('Error fetching email logs:', error);
  });
