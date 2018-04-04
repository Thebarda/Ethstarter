*** Settings ***
${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
${options.add_argument}=  Set Variable  add_argument=--headless
Create WebDriver Chrome chrome_options=${options}
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${undefined}    http://localhost:1047/

*** Test Cases ***
Test Case
    Click Link    id=btnConnexion
    Input Text    name=login    denied
    Input Password    name=password    denied
    Click Button    xpath=//input[@value='connexion']
    Go To   http://localhost:1047/creerCampagne
    Click Element   id:datepicker
    Select From List By Value   //div[@id='datepicker_root']/div/div/div/div/div[2]/div/div/select[2]   2020
    Click Element   //table[@id='datepicker_table']/tbody/tr[3]/td[5]/div
    Input Text  id:titreCampagne    test robotFramework
    Input Text  id:descriptionCourte    test robot
    Input Text  class:wysibb-body      test robot framework
    Input Text  id:objectif     10
    Input Text  id:objectifMax  12
    Press Key     id:montantCP    \\13
    Press Key     id:cp     \\13
    Click Link  id:submit
    Page Should Contain     Veuillez remplir le champ du montant de la contre-partie
    Page Should Contain     Veuillez remplir le champ de la contre-partie
    Page Should Contain    Veuillez remplir correctement les champs de la/des contre-partie(s)