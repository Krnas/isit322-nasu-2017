var express = require('express');
var router = express.Router();
const request = require('request');
const GitHub = require('github-api');
const token = require('./tokens');
// console.log('notoken');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
    res.render('index', { title: 'micro-first' });
});

router.get('/you-rang', function(request, response) {
    response.status(200).send({
        result: 'success',
        message: 'i am micro-first, up and running'
    });
});

router.get('/get-user', function(req, res, next) {
    const options = {
        url: 'https://api.github.com/users/charliecalvert',
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
            token: token
        });
    } else {
        gh = new GitHub({
            username: 'charliecalvert',
            password: ''
        });
    }
    return gh;
};

router.get('/useApi', function(request, response, next) {
    console.log('USE API CALLED');
    let gh = getGitHub();
    const me = gh.getUser();
    console.log('ME', me);
    me.listGists(
    ).then(function({data}) {
        console.log('USER PROMISE', data);
        const results = data.map((item) => ({
                'html_url': item.html_url,
                'id': item.id,
                'git_pull_url': item.git_pull_url,
                'description': item.description
            }));
        response.status(200).send({
            'count': results.length,
            'result': results
        });
    }).catch(function(err) {
        console.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });

});

// import GitHub from 'github-api';
router.get('/gist', function(request, response, next) {
    console.log('USE API CALLED');
    let gh = getGitHub();

    // unauthenticated client
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My second gist',
        files: {
            'file1.txt': {
                content: 'Gists are too great!'
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        var gistData = gist.read();
        console.log('PROMISES', gistData);
        return gistData;
    }).then(function({data}) {
        let retrievedGist = data;
        // do interesting things
        console.log('RETRIEVED', retrievedGist);
        const bar = JSON.stringify(retrievedGist);
        response.status(200).send({'result': bar});
    }).catch(function(err) {
        console.log('Promise Rejected', err);
        response.status(500).send({'result': err});
    });

});


router.get('/gist-test', function(request, response) {
    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My third gist',
        files: {
            "file4.txt": {
                content: "Aren't four gists great!"
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        console.log('RETRIEVED', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function(err) {
        console.log('Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});

router.get('/list-user-gists', function(request, response) {
    const gh = getGitHub();
    let gist = gh.listGists(); // not a gist yet
    gist.create({
        public: true,
        description: 'My third gist',
        files: {
            "file4.txt": {
                content: "Aren't four gists great!"
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        console.log('RETRIEVED', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function(err) {
        console.log('Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});


module.exports = router;
