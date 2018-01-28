var db = require('../../models/configDb');
var assert = require('assert');
describe("connect to database", function(){
   it("should connect to database", function(done){
     db.getConnection(function(err, connection){
         assert.equal(err, null);
         done();
     });
   });
});