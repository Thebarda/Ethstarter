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
    Click Link  (//div[@id="campagne"][1]/div/div[2]/p/a)
    Click Link  id:btnSendMail
    Input Text  id:subjectEmail     un sujet robotframework
    Click Link  id:sendMail
    Wait Until Page Contains    Veuillez spécifier un corps de mail