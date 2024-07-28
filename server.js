const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const authRoute = require('./routes/auth.route');

dotenv.config();

const app = express();
const port = process.env.PORT || 6501;

// app middlewares
app.use(morgan('dev'));
// app.use(cors());
if (process.env.NODE_ENV !== 'development') {
    app.use({ origin: `${process.env.CLIENT_URL}` });
};
app.use(express.json()); // To parse JSON bodies

// Import Routes
app.use('/api/v1/users', authRoute);

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
