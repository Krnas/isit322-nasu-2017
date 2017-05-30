var express = require('express');
var router = express.Router();

debug('this is a test');
const Logger = require('../routes/ElfLogger');
var logger = new Logger('routes-index');
const requester = new require('request');

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});
router.get('/foo', function(req, response, next) {
    const message = {
        'result': 'success',
        'foo': 'barseer',
        'file': 'api.js'
    };
    logger.log('Foo called on server:', message);
    response.status(200).send(message);
});
router.get('/users/get-user', function(request, response, next) {
    requester('http://localhost:30026/get-user').pipe(response);
});

router.get('/bar', function(request, response, next) {
    response.send({'result': 'success from 30026'});
});

router.get('/bar/:id', function(request, response, next) {
    response.send({
        'result': 'success bar slash from 30026'
    });
});
module.exports = router;
