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
    Input Text    name=password    contributor
    Input Password    name=login    contributor
    Click Button    xpath=//input[@value='connexion']
    Click Link      id:btnProfil
    Click Link      class:btnModifierProfil
    Input Text      name:email  contributor@contrib.com
    Click Element   //input[@value='Valider']
    Textfield Should Contain  name:email  contributor@contrib.com