## DemoReadyLandingPage

## Run the project locally

You can run this project locally using the next commands. First you need to install all the packages, just run:

```
npm install
```
or
```
yarn
```

Then, you just need to start the app:

```
npm start
```
or
```
yarn start
```

Or you can combine both commands:

```
npm install && npm start
```
or
```
yarn && yarn start
```

Then the app should open in your default browser in the port `3000`. If you already have any app running in said port You'll be ask in the console if you want to use another port, just type `yes` in the console to use another port.

## Or you can run it with Docker 

Build it using `docker build -t landing-page .` 
Run it using `docker container run -it -p  3000:3000 -v $PWD\src:/app/src  landing-page`

## If you are running in Windows

Run it using `docker container run -it -p  3000:3000 -e CHOKIDAR_USEPOLLING=true -v $PWD\src:/app/src  landing-page`

