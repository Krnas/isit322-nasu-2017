var express = require('express');
var router = express.Router();
var debug = require('debug')('git-convert');
debug('this is a test');
const Logger = require('../routes/ElfLogger');
var logger = new Logger('routes-index');

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

module.exports = router;
