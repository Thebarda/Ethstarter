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
    Click Link  (//div[@id="campagne"][1]/div/div[2]/p/a)
    Click Link    id=contribute
    Input Text    id=montantJS    0.3
    Press Key     id=montantJS    \\9
    Click Link    id=submitParticipation
    Press Key     id=montantJS    \\27
    Go To   http://localhost:1047/Participations
    Click Element   xpath=//form[1]/i
    Wait Until Page Contains    Nom de la campagne / Montant contribué
