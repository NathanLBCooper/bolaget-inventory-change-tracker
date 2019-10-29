# bologat-frontend

React Native app displaying changes to the System Bolgat inventory. The back-end (not in this repo) is built on top of the System Bolaget Open API.

Show changes in price, vintage, producer, alcohol content, packaging etc

|||
|-------------|-------------------|
| **Frontend**  |<a href="http://bolaget.surge.sh" target="_blank">bolaget.surge.sh</a>|

![Photo and Screenshots](https://i.imgur.com/F7IfRqJ.jpg)

## Setup ##

Update your node and npm versions from here [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Install ##

```sh
npm install -g expo-cli

cd app/
npm install
cd ..

cd fakebackend
npm install
cd ..
```

## Run ##

Open two command windows.

Run the app in the first:

```sh
cd app/
expo start
```

You need a backend as well. By default (in *appsettings.json*) it will use a local express server.
In the second window, run this:

```sh
cd fakebackend/
npm run live
```

## Lint ##

```sh
cd app/
gulp lint
```

## Manual deploy ##

The CI sever will deploy new versions to [http://bolaget.surge.sh](http://bolaget.surge.sh), but you can also deploy your fork to surge.


**Install** :
```sh
npm install -g surge
```

**Deploy**:

```sh
npm install -g expo-cli

cd app/
expo build:web
cd web-build/
surge
```

then follow the instructions on the command line
