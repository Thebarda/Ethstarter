const {Builder, By} = require('selenium-webdriver');
var assert = require('assert');
describe("Campagnes", function(){
    let driver = new Builder()
        .forBrowser('chrome')
        .build();
   describe("affichage d'une campagne", function(){
       it("should return 'Mon casque VR' as h3", async function(){
           this.timeout(20000);
           driver.get('http://localhost:1047/campaign/1');
           var monCasqueVR = await driver.findElement(By.tagName("h3")).getText();
           assert.equal(monCasqueVR, "Mon casque VR");
       });
       it("id 'description' should exists", async function(){
           this.timeout(20000);
           var existed = await driver.findElement(By.id('description')).then(function() {
               return true;
           }, function(err) {
               if (err instanceof webdriver.error.NoSuchElementError) {
                   return false;
               }
           });
           assert.equal(existed, true);
       });
       it("id 'contribs' should exists", async function(){
           this.timeout(20000);
           var existed = await driver.findElement(By.id('contribs')).then(function() {
               return true;
           }, function(err) {
               if (err instanceof webdriver.error.NoSuchElementError) {
                   return false;
               }
           });
           assert.equal(existed, true);
           driver.quit();
       });
   });
});