var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'micro-first'});
});

router.get('/you-rang', function(request, response) {
    'use strict';
    response.status(200).send({
        result: 'success',
        message: 'i am micro-first, up and running'
    });
});

module.exports = router;
