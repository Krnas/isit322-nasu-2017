/**
 * Created by bcuser on 5/16/17.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');
/* GET home page. */

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

router.get('/gist-test', function(request, response) {


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
        console.log('Promise rejected', err);
        console.log('Bar', bar);
        response.status(500).send({'result': err});
    });
});

rounter.get('/get-gist-list', function(request, response) {
    let gh = getGitHub();
    const me = gh.getUser();
    console.log('ME', me);
    me.listGists(
    ).then(function({gists}) {
        console.log('USER PROMISE', gists);
        const results = gists.map(function(gist) {
            return {
                url: gist.url,
                html_url: gist.html_url
            };
        });
        response.status(200).send({
            //'count': results.length,
            'result': results
        });
    }).catch(function(err) {
        console.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});
module.exports = router();
