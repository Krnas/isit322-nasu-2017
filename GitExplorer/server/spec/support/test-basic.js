/**
 * Created by charlie on 10/7/15.
 */
var request = require('supertest');
var app = require('../../app');
const Logger = require('../routes/ElfLogger');
const logger = new Logger('test-basic');

describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

});
describe('Elven foo Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('get-basic-list-route', function(done) {
        request(app)
            .get('/foo')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
    it('checks the foo response', function(done) {
        request(app)
            .get('/foo')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                logger.log(response.body);
                expect(response.body.result).toBe('success');
                expect(response.body.foo).toBe('barseer');
                expect(response.body.file).toBe('api.js');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
});
