const router = require('express').Router();
const axios = require('axios');
require('dotenv').config()
const headers = { Authorization: `Bearer ${process.env.LOTRTOKEN}`}
const phone = `${process.env.PHONE}`
const key = `${process.env.KEY}`
let quote = '';
let idx;

axios.get('https://the-one-api.dev/v2/quote?limit=2390', { headers })
    .then(response => {
        idx = Math.floor(Math.random() * Math.floor(2390))
        quote = response.data.docs[idx].dialog;
        // axios.post('https://textbelt.com/text', {
        //     phone: `${phone}`,
        //     message: `${quote}`,
        //     key: `${key}`
        // })
        // .then(response => {
        //     console.log(response.data);
        // });
    })
    .catch(error => {
        console.log(error);
    })

module.exports = router;