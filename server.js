const express = require('express');
const router = require('./routes/lotr');
// const request = require('request');

const app = express();

// app.get('/', function(req, res) {
//     res.send('<h1>Hello, World!</h1>');
// });

app.use('/', router);

app.listen(3001, function() {
    console.log('Listening on port 3001');
});