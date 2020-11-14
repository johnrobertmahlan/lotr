const express = require('express');
const router = require('./routes/lotr');
require('dotenv').config()

const app = express();

// app.get('/', function(req, res) {
//     res.send('<h1>Hello, World!</h1>');
// });

app.use('/', router);

app.listen(3001, function() {
    console.log('Listening on port 3001');
});