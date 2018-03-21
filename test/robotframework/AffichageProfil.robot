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
    Input Text    name=login    Romain
    Input Password    name=password    Clavaud
    Click Button    xpath=//input[@value='connexion']
    Click Link  id:btnProfil
    Element Should Be Disabled  name:lastname
    Element Should Be Disabled  name:firstname
    Element Should Be Disabled  name:login
    Element Should Be Disabled  name:email
    Element Should Be Disabled  name:nomEntreprise
    Element Should Be Disabled  name:address
    Element Should Be Disabled  name:oldPassword
    Element Should Be Disabled  name:newPassword
    Page Should Contain     Votre profil
    Page Should Contain     Modifier le profil
    Page Should Contain     Supprimer