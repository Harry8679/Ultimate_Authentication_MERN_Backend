const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 6501;

app.get('/api/v1/signup', (req, res) => {
    res.json({
        data: 'You hit signup endpoint'
    });
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});