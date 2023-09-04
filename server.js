const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})