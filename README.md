# Links Shortener
Simple app for shortening links

## Frontend (React)
* Materialize for styling

## Backend (NodeJS - Express)
* NodeJS with Express Framework 
* Database is MongoDB

## Prior to using this app the following steps should be taken
* Make sure you have Node.js v.10.19.0 or later and NPM installed
* You also must have a **MongoDB cluster** available
* Run **npm install** to install dependencies for the server
* Run **npm run client:install** to install dependencies for the client

## For Development mode
* In **config** folder rename **default_mock.json** to **default.json** and fill in all fields with relevant data
* Run **npm run dev**. This command will launch the client and node-backend. The app will be automatically reloaded every time you change any of the source files


## For Production mode
* In **config** folder fill in all fields with relevant data in **production.json** file
* Run **npm run client:build** to build the project. The build artifacts will be stored in the **client/build** directory
* Run **npm install pm2 -g** to install a production process manager for Node.js applications
* Run **pm2 start npm -- start** to start the app in production mode
