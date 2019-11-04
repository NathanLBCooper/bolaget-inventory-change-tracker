# bologat-inventory-change-tracker

React Native app displaying changes to the System Bolgat inventory.

Show changes in price, vintage, producer, alcohol content, packaging etc

|||
|-------------|-------------------|
| **Frontend**  |<a href="http://bolaget.surge.sh" target="_blank">bolaget.surge.sh</a>|

![Photo and Screenshots](preview.jpg)

# Docker Setup

```sh
docker-compose up --build
```

And just like that everything will start running. The app will run on http://localhost:19006/. You have hot reloading and can start developing.

### The docker setup has problems: ###

*Using docker is the best way to quicky run and see the app but unlike the non-docker setup there are a **few annoying issues** here:*
- *"clear site data" needs to be run before new changes to the app code can be seen in the browser. Whatever way this invalidates outside of docker is broken from within.*
- *The developer console (http://localhost:19002/) isn't there.*
- ...

# Non-docker setup

## Setup ##

Update your node and npm versions from here [https://nodejs.org/en/download/](https://nodejs.org/en/download/), and get yarn here [https://yarnpkg.com/lang/en/docs/install/#windows-stable](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

## Install ##

```sh
cd app
yarn
cd ..

cd fakebackend
yarn
cd ..
```

## Run ##

Open two command windows.

Run the app in the first:

```sh
cd app
yarn run web
```

You need a backend as well. By default (in *appsettings.json*) it will use a local express server.
In the second window, run this:

```sh
cd fakebackend
yarn run live
```

# Running on another device #

If you want to run the app using your phone on lan you'll need to also go into *appsettings.json* and change the `baseUrl` from *localhost* to your ip.

# Lint #

```sh
cd app
yarn run lint
```

# Manual deploy #

The CI sever will deploy new versions to [http://bolaget.surge.sh](http://bolaget.surge.sh), but you can also deploy your fork to surge.


**Install** :
```sh
npm install -g surge
```

**Deploy**:

```sh
cd app
yarn
yarn run build-web
cd web-build
surge
```

then follow the instructions on the command line
