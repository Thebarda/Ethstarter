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
  Input Text    name=login    moderator
  Input Password    name=password    acme
  Click Button    xpath=//input[@value='connexion']
  Go To         http://localhost:1047/campaingsWaiting
  PageShould Contain    Campagnes en attente de validation
  Click Link    link=Découvrir
  Page Should Contain   Validation
  Click link    id=validateCampaign
  Input Text    id=descriptionValidation  DescriptionValidation
  Click link    id=unapprove
  Wait Until Page Contains   Campagnes en attente de validation
