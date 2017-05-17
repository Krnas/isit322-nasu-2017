var express = require('express');
var router = express.Router();
var debug = require('debug')('git-convert');
debug('this is a test');
/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});
router.get('/foo', function(req, response, next) {
    var message = {
        'result': 'success',
        'foo': 'bar',
        'file': 'api.js'
    };
});

module.exports = router;
