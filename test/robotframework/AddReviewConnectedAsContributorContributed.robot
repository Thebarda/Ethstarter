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
    Input Text    name=login    contributor
    Input Password    name=password    contrbutor
    Click Button    xpath=//input[@value='connexion']
    Click Link  (//div[@id="campagne"][1]/div/div[2]/p/a)
    Page Should Contain     mon projet
    Page Should Contain     Commentaires
    Click Button    id:btnComm
    Input Text      id:areaComm     un comm en terre robot framework
    Click Button    id:btnPost
    Wait Until Page Contains    un comm en terre robot framework