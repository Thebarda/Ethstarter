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
    Click Link     id=btnConnexion
    Input Text    name=password    denied
    Input Password    name=login    denied
    Click Button    xpath=//input[@value='connexion']
    Page should contain    Bonjour denied
    Go To    http://localhost:1047/campaign/1264
    Click Link    id=contribute
    Input Text    id=montantJS    0.01
    Press Key     id=montantJS    \\9
    Click Link    id=submitParticipation
    Press Key     id=montantJS    \\27
    Location Should Be  http://localhost:1047/campaign/1264
