*** Settings ***
${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
${options.add_argument}=  Set Variable  add_argument=--headless
Create WebDriver Chrome chrome_options=${options}
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${undefined}    http://localhost:1047/

*** Test Cases ***
Test Case
    Click Link  (//div[@id="campagne"][1]/div/div[2]/p/a)
    Page Should Contain     mon projet
    Page Should Contain     Commentaires
    Page Should Contain     Vous devez être connecté pour poster un commentaire