const express = require('express');
const router = require('./routes/lotr');

const app = express();

app.use('/', router);

app.listen(3001, function() {
    console.log('Listening on port 3001');
});