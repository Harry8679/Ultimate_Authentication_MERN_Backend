const express = require('express');
const dotenv = require('dotenv');
const app = express();
const authRoute = require('./routes/auth.route');
dotenv.config();

const port = process.env.PORT || 6501;

app.use('/api/v1/users', authRoute);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});