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
    Click Link    id=contribute
    Input Text    id=montantJS    0
    Press Key     id=montantJS    \\9
    Page should contain    Veuillez saisir un montant supérieur à 0 ether
    Press Key     id=montantJS    \\27
    Location Should Be  http://localhost:1047/campaign/144
