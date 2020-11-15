const router = require('express').Router();
const axios = require('axios');
require('dotenv').config()
const headers = { Authorization: `Bearer ${process.env.LOTRTOKEN}`}
const phone = `${process.env.PHONE}`


router.get('/', function(req, res) {
    res.send('<h1>LOTR!</h1>');
});

axios.get('https://the-one-api.dev/v2/quote', { headers })
    .then(response => {
        console.log("Success");
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })

axios.post('https://textbelt.com/text', {
        phone: `${phone}`,
        message: 'Hello world',
        key: 'textbelt'
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })


module.exports = router;