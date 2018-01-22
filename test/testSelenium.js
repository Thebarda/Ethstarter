const {Builder, By} = require('selenium-webdriver');
var assert = require('assert');
describe("test selenium", function(){
    let driver = new Builder()
        .forBrowser('chrome')
        .build();
    it('should faire de la merde', function(done){
        this.timeout(20000);
       driver.get('http://localhost:1047/');
       driver.findElement(By.tagName("h3")).getText().then(function(data){
           assert.equal(data, "Salut");
           done();
       });
       driver.quit();
   });
});