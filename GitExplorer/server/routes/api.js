var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/foo', function(req, response, next) {
    var message = {
        'result': 'success',
        'foo': 'bar',
        'file': 'api.js'
    };
    console.log('Foo called on server with message:', message);
    response.send(message);
});


router.get('/user', function(req, res, next) {
    var options = {
        url: 'https://github.com/Krnas/isit322-nasu-2017.git',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});




module.exports = router;