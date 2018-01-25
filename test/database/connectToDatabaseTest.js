var dbTest = require('../models/configDbTest');
var assert = require('assert');
describe("connect to database test", function(){
    it("should connect to database test", function(done){
        dbTest.getConnection(function(err, connection){
            assert.equal(err, null);
            done();
        });
    });
});