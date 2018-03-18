*** Settings ***
${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
${options.add_argument}=  Set Variable  add_argument=--headless
Create WebDriver Chrome chrome_options=${options}
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${undefined}    https://www.katalon.com/

*** Test Cases ***
Test Case
    Click Link    id=btnConnexion
    Input Text    name=login    Lafarge
    Input Password    name=password    Lafarge
    Click Button    xpath=//input[@value='connexion']
    Go To   http://localhost:1047/creerCampagne
    Page Should Contain     Votre compte n'a pas le droit de créer une campagne