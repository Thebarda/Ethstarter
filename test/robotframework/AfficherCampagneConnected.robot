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
    Page should contain    mon projet
    Element Should Be Visible   id=contribute
