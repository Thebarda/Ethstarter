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
    Input Text    name=login    denied
    Input Password    name=password    denied
    Click Button    xpath=//input[@value='connexion']
    Go To   http://localhost:1047/creerCampagne
    Go To   http://localhost:1047/creerCampagne/#submit
    Click Link    id=submit
    Page should contain    Tous les champs doivent être remplis