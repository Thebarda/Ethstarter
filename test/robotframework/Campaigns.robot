*** Settings ***
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