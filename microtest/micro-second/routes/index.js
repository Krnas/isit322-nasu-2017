var express = require('express');
var router = express.Router();
const requester = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'micro-second'});
});

router.get('/you-rang', function(request, response) {
    response.status(200).json({
        result: 'success',
        message: 'i am micro-second, up and running'
    });
});


module.exports = router;
