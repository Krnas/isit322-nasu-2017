/**
 * Created by charlie on 10/7/15.
 */
var request = require('supertest');
var app = require('../app');
const Logger = require('../routes/ElfLogger');
const logger = new Logger('test-gists');
describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

});
describe('Elven gists Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('get the foo route', function(done) {
        request(app)
            .get('/gitapi/gists/get-basic-list')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('checks the gist response', function(done) {
        request(app)
            .get('/gitapi/gists/get-basic-list')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                logger.log(response.body);
                expect(typeof response.body.count).toBe('number');
                expect(typeof response.body.result).toBe('object');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('checks the gist response has four props: html_url, id, description, git_pull_url', function(done) {
        request(app)
            .get('/gitapi/gists/get-basic-list')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                logger.log(response.body.result[0]);
                const gist = response.body.result[0];
                expect(gist.html_url).toBeDefined();
                expect(gist.id).toBeDefined();
                expect(gist.description).toBeDefined();
                expect(gist.git_pull_url).toBeDefined();
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

});
