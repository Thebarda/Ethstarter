const {Builder, By} = require('selenium-webdriver');
var assert = require('assert');
describe("test selenium", function(){
    let driver = new Builder()
        .forBrowser('chrome')
        .build();
    it('should faire de la merde', async function(){
        this.timeout(20000);
       driver.get('http://localhost:1047/');
       var salut = await driver.findElement(By.id("btnConnexion")).getText();
        assert.equal(salut, "Connexion");
       driver.quit();
   });
});