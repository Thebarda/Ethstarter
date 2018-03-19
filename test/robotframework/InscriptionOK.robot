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
    Click Link    id=btnInscription
    Input Text    name=lastname    testTobotframework
    Input Text    name=firstname    testTobotframework
    Input Text    name=login    testTobotframework
    Input Password    name=password    testTobotframework
    Input Text    name=email    test@test.fe
    Input Text    name=address    0x13ee5c4b7af45ee01c4b39dac2bed572bf8cf60d
    Click Button    xpath=//input[@value='inscription']
    Wait Until Page Contains   Connexion
    Location Should Be    http://localhost:1047/validationInscriptionContributeur
