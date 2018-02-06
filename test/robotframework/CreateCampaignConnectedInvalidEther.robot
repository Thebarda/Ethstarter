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
    Go To   http://localhost:1047/creerCampagne
    Input Text  name=titreCampagne  un projet robotframework
    Input Text  name=descriptionCourte  une description rapide robotframework
     Go To   http://localhost:1047/creerCampagne/#submit
    Input Text  css=.wysibb-text-editor  une description robotframework
    Input Text  name=datepicker  2019-02-27
    Input Text  name=objectif  un objectif robotframework
    Click Link    id=submit
    Page should contain    Tous les champs doivent être remplis