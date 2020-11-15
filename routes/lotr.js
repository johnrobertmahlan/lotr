const router = require('express').Router();
const axios = require('axios');
const schedule = require('node-schedule');
require('dotenv').config()
const headers = { Authorization: `Bearer ${process.env.LOTRTOKEN}`}
const phone = `${process.env.PHONE}`
const key = `${process.env.KEY}`
let quote = '';
let idx;

schedule.scheduleJob('* 09 * * *', function() {
    axios.get('https://the-one-api.dev/v2/quote?limit=2390', { headers })
        .then(response => {
            console.log("Success!");
            idx = Math.floor(Math.random() * Math.floor(2390))
            quote = response.data.docs[idx].dialog;
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
});


module.exports = router;