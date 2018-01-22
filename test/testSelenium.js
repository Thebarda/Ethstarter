const {Builder, By, until} = require('selenium-webdriver');
describe("test selenium", function(){
    let driver = new Builder()
        .forBrowser('chrome')
        .build();
    it('should faire de la merde', function(){
       driver.get('http://www.google.com/ncr');
       driver.findElement(By.name('q')).sendKeys('webdriver');
       driver.findElement(By.name('btnK')).click();
       driver.wait(until.titleIs('webdriver - Google Search'), 1000);
       driver.quit();
   });
});