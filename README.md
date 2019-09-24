# bologat-frontend

React Native app displaying changes to the System Bolgat inventory. The back-end (not in this repo) is built on top of the System Bolaget Open API.

Show changes in price, vintage, producer, alcohol content, packaging etc

|||
|-------------|-------------------|
| **Frontend**  |<a href="http://bolaget.surge.sh" target="_blank">bolaget.surge.sh</a>|

![Image description](https://i.imgur.com/qK7VcTh.jpg)

## Setup ##

Update your node and npm versions from here https://nodejs.org/en/download/

### app ###

Install Expo CLI by running:
    
    npm install -g expo-cli

Go to the *\app* folder and install project dependencies by running:

    npm install

Then **run with**

    expo start
    
### fake-backend ###
    
To also run the fake backend go to the *\fakebackend* folder and dependencies by running:

    npm install
    
then **run that backend with**

    npm run live
    
### manual web deploy (optional) ###

Install surge by running
    
    npm install -g surge
    
Go to the *\app* folder and build with

    expo build:web
    
Go to the *\app\web-build* and run

    surge
    
then follow the instructions on the command line

## Lint ##

    gulp lint
    
Don't push unless this returns zero errors
