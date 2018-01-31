var db = require('../../models/configDb');
var assert = require('assert');
describe("connect to database", function(){
   it("should connect to database", async function(){
     await db.getConnection(function(err, connection){
         assert.equal(err, null);
     });
   });
});