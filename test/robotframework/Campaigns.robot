*** Settings ***
${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
${options.add_argument}=  Set Variable  add_argument=--headless
Create WebDriver Chrome chrome_options=${options}
Suite Setup    Open Browser    http://localhost:1047/    chrome
Suite Teardown    Close Browser
Library           SeleniumLibrary

*** Variables ***
${monCasqueVR}    Mon casque VR
${title}          Toute les campagnes

*** Test Cases ***
Test Case
    Go To   http://localhost:1047/campaigns
    Page should contain     ${monCasqueVR}
    Title Should Be         ${title}