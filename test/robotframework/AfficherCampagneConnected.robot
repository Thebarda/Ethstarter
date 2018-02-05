*** Settings ***
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${undefined}    https://www.katalon.com/

*** Test Cases ***
Test Case
    Click Link     id=btnConnexion
    Input Text    name=password    Clavaud
    Input Password    name=login    Romain
    Click Button    xpath=//input[@value='connexion']
    Page should contain    Bonjour Romain
    Go To    http://localhost:1047/campaign/144
    Page should contain    Mon casque VR
    Element Should Be Visible   id=contribute