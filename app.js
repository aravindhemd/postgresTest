const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    console.log("TEST TEST");
    res.send('Hello World!');
})

module.exports = app;