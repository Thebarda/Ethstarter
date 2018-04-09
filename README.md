### Note sur le projet

Nous rencontrons actuellement des problèmes avec la blockchain.
Après démarrage de la blockchain de test avec Ganache CLI, peu de temps après (c'est assez aléatoire), les comptes créés par cette dernière sont 0 ether au lieu d'avoir une valeur supérieur à 90 ether.

Nous avons donc posté une issue sur le Github de Ganache CLI (https://github.com/trufflesuite/ganache-cli/issues/502)

Afin que l'application soit, tout de même, utilisable, nous avons commenté le code qui permet la communication avec le smart contract deployé dans la blockchain de test. 

Avec une blockchain de test fonctionnelle, nous vous confirmons que les tests unitaires concernant la partie du code commentée passent tous.

# Ethstarter

Application web de financement participatif utilisant la crypto-monnaie Ethereum


# DOD
  - Le code est stocké dans un contrôleur de source
  - Le build a été exécuté dans l'environnement
  - Les standards de code sont respectés
  - L'élément a des tests unitaires
  - L'élément a des tests automatisés
  - Les tests nécessaires ont été exécutés
  - Le Product Owner a vu une démonstration ou fait les tests nécessaires
  
# Vision

Pour les entrepreneurs et les contributeurs

Qui souhaitent financer les projets ou contribuer a une campagne de financement

Notre produit est une application web

Qui permet aux contributeurs de participer a une campagne de financement et aux entrepreneurs de financer leurs projets

A la difference de Kickstarter ou Ulule

Permet l'utilisation, uniquement de la cryptomonnaie, Ethereum

# How to run it with docker ?

NOTE : This part will change soon

git clone the project

build the image : docker build -t ethstarter-alpine:latest . 

then run it : docker run -p 1047:1047 -t ethstarter-alpine


# How to run it without docker ?

You have to install nodejs, npm, python and pip

If you want to run functionals tests, please install robotframework and the selenium library with pip

Run the project : npm start

Launch tests : robot test/robotframework

# Tests
This project contains, nowaday, 3 types of tests : unit tests, smart contract tests and functional test
