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
    Go To   http://localhost:1047/notifications
    Click Element   xpath=//a[@name='launchModal']
    Input Text  id:userAuto         denied
    Press Key   id:userAuto         \\
    Input Text  id:messageTitle     un message robot
    Input Text  id:messageBody      un corps d'un message robot
    Click Link  id:sendButton
    Go To       http://localhost:1047/
    Click Element  id:btnDeconnexion
    Click Link    id=btnConnexion
    Input Text    name=login    denied
    Input Password    name=password    denied
    Click Button    xpath=//input[@value='connexion']
    Go To   http://localhost:1047/notifications#messages
    Page Should Contain     un message robot
    Page Should Contain     un corps d'un message robot
    Click Link      xpath=//a[@name="reply"][last()]
    Input Text  id:messageBody      réponse d'un message robot
    Click Link  id:sendButton
    Click Button      xpath=//button[last()]
    Click Link    id=btnConnexion
    Input Text    name=login    Toto
    Input Password    name=password    toto
    Click Button    xpath=//input[@value='connexion']
    Go To   http://localhost:1047/notifications
    Input Text  id:messageBody      réponse d'un message robot
    Click Button      xpath=//button[last()]
