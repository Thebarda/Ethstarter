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
    Input Text    name=login    Toto
    Input Password    name=password    toto
    Click Button    xpath=//input[@value='connexion']
    Click Link  (//div[@id="campagne"][1]/div/div[2]/p/a)
    Click Link  id:favbutton
    Go To   http://localhost:1047/myfavorites
    Page Should Contain     mon projet
    Go To   http://localhost:1047/
    Click Link  (//div[@id="campagne"][1]/div/div[2]/p/a)
    Click Link  id:favbutton
    Go To   http://localhost:1047/myfavorites
    Page Should Contain     Aucun résultat :(