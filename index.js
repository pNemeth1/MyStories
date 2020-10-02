const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'})
});

const Port = process.env.PORT || 5000;

app.listen(5000);