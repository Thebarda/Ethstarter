const {Builder, By} = require('selenium-webdriver');
describe("test selenium", function(){
    let driver = new Builder()
        .forBrowser('chrome')
        .build();
    it('should faire de la merde', function(){
       driver.get('http://localhost:1047/');
       driver.findElement(By.tagName("h3"));
       driver.quit();
   });
});