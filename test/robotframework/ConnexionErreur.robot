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
    Click Link    id=btnConnexion
    Input Text    name=login    dsdsdsds
    Input Password    name=password    dsdssdds
    Click Button    xpath=//input[@value='connexion']
    Page Should Contain     Login ou password incorrect !
    