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
    Input Text    name=login    moderator
    Input Password    name=password    acme
    Click Button    xpath=//input[@value='connexion']
    Page should contain    Bonjour moderator
    Go To   http://localhost:1047/administration
    Wait Until Page Contains    Administration
    Wait Until Page Contains     Contributeurs
    Wait Until Page Contains     Entrepreneurs
    Wait Until Page Contains     Campagnes
    Title Should Be   Administration