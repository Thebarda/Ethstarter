*** Settings ***
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${undefined}    https://www.katalon.com/

*** Test Cases ***
Test Case
    Click Link    id=btnConnexion
    Input Text    name=login    Romain
    Input Password    name=password    Clavaud
    Click Button    xpath=//input[@value='connexion']
    Page should contain    Bonjour Romain
    Click Link    id=btnDeconnexion
    