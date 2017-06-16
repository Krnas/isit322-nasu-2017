var express = require('express');
var router = express.Router();
var debug = require('debug');

const Logger = require('../routes/ElfLogger');
var logger = new Logger('routes-index');
const requester = new require('request');
debug('this is a test');


const microIndex = 1;

const microFirst = [
    'http://localhost:30027',
    'https://micro-first.herokuapp.com'
];
const microSecond = [
    'http://localhost:30027',
    'https://micro-second.herokuapp.com'
];
const microThird = [
    'http://localhost:30027',
    'https://micro-Third.herokuapp.com'
];
let sayMicroFirst = function() {
    console.log('MicroFirst:', microFirst[microIndex]);
};
router.get('/micro-first/you-rang', function(request, response, next) {
    sayMicroFirst();
    requester(microFirst[microIndex] + '/you-rang').pipe(response);
});
let sayMicroSecond = function() {
    console.log('MicroSecond:', microSecond[microIndex]);
};
router.get('/micro-second/you-rang', function(request, response, next) {
    sayMicroSecond();
    requester(microSecond[microIndex] + '/you-rang').pipe(response);
});
let sayMicroThird = function() {
    console.log('MicroThird:', microThird[microIndex]);

};
router.get('/micro-third/you-rang', function(request, response, next) {
    sayMicroThird();
    requester(microThird[microIndex] + '/you-rang').pipe(response);
});

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});
router.get('/foo', function(req, response, next) {
    const message = {
        'result': 'success',
        'foo': 'server-routes-barseer',
        'file': 'server-routes-api.js',

    };
    logger.log('Foo called on server:', message);
    response.status(200).send(message);
});

router.get('/users/get-user', function(request, response, next) {
    requester('http://localhost:30026/get-user').pipe(response);
});

router.get('/bar', function(request, response, next) {
    requester('http://localhost:30026/bar').pipe(response);
});
router.get('/bar/:id', function(request, response, next) {
    response.send({
        'result': 'success bar slash from 30026'
    });
});
module.exports = router;
