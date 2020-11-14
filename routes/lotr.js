const router = require('express').Router();
const request = require('request');

// router.get('/', function(req, res) {
//     res.send('<h1>Hello, World!</h1>');
// });

// router.get('/', function(req, res) {
//     fetch('https://the-one-api.dev/v2/book')
//     .then(response.json())
//     .then(function(data) {
//         console.log(data);
//     });
// });

router.get('/', function(req, res) {
    request('https://the-one-api.dev/v2/book', function(error, response, body) {
        res.json(body);
    });
});

module.exports = router;