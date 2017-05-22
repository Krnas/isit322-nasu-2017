/**
 * Created by bcuser on 5/16/17.
 */
const express = require('express');
const router = express.Router();
const request = require('request');
const GitHub = require('github-api');
//const token = require('../tokens');
const Logger = require('../ElfLogger');
const logger = new Logger('gitapi-gists');
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

router.get('/get-basic-list', function(request, response, next) {
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
        console.log('Promise rejected', err);
        console.log('Bar', bar);
        response.status(500).send({'result': err});
    });
});

router.get('/get-gist-list', function(request, response) {
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
module.exports = router;
