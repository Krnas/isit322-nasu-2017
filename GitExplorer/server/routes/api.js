var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');
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
    const options = {
        url: 'https://api.github.com/users/Krnas',
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
        res.status(200).send({error: error, response: response, body: body});
    });

});

let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: '9e0587feb190aba5ecbb7798fff8b767ea06bd1d'
        });
    } else {
        gh = new GitHub({
            username: 'Krnas',
            password: ''
        });
    }
    return gh;
};

router.get('/gist-test', function (request, response) {


// unauthenticated client
    const gh = new getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My first gist',
        files: {
            'file1.txt': {
                content: 'Arent three gists great!'
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        console.log('Retrieved', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function(err) {
        console.log('Promise rejected', Object.keys(err));
        console.log('Promise rejected', err.response.status, err.response.data.message);
        // TODO: Bar is not defined
        //console.log('Bar', bar);
        response.status(500).send({'result': 'error', 'status-text': err.response.status});
    });
});

module.exports = router;
