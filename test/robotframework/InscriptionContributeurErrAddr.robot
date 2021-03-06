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
    Input Text    name=lastname    test
    Input Text    name=firstname    test
    Input Text    name=login    test
    Input Password    name=password    test
    Input Text    name=email    test@test.fe
    Input Text    name=address    testAddr
    Click Button    xpath=//input[@value='inscription']
    Page should contain   Adresse publique incorrecte