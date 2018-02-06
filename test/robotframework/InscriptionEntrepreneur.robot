*** Settings ***
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${undefined}    https://www.katalon.com/

*** Test Cases ***
Test Case
    Click Link     id=btnInscription
    Click Element     id=entrepreneur
    Input Text    name=lastname    Clavaud
    Input Text    name=firstname    Romain
    Input Text    name=login    login1
    Input Text    name=email    bjr@gmail.com
    Input Text    name=nomEntreprise    Société1
    Input Text    name=address    0x41543C111A682eAf78Acd04722b5Ef824001d9Aa
    Input Password    name=password    password1
    Click Element     name=image
    Type              name=image        C:\fakepath\document.pdf
    Click Button    xpath=//input[@value='inscription']
    Page should contain    Connexion

