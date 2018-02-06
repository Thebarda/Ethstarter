*** Settings ***
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${undefined}    https://www.katalon.com/

*** Test Cases ***
Test Case
    Go To   http://localhost:1047/creerCampagne
    Page should contain     Vous devez être connecté en tant qu'entrepreneur