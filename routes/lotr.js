const router = require('express').Router();
const axios = require('axios');
require('dotenv').config()
const headers = { Authorization: `Bearer ${process.env.LOTRTOKEN}`}
const phone = `${process.env.PHONE}`
const key = `${process.env.KEY}`
let quote = '';

axios.get('https://the-one-api.dev/v2/quote', { headers })
    .then(response => {
        console.log("Success");
        quote = response.data.docs[737].dialog;
        //use Math.random to generate a number between 1-1000, then pass that as the index to response.data.docs
        axios.post('https://textbelt.com/text', {
            phone: `${phone}`,
            message: `${quote}`,
            key: `${key}`
        })
        .then(response => {
            console.log(response.data);
        });
    })
    .catch(error => {
        console.log(error);
    })

module.exports = router;