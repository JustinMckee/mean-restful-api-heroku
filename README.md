# MeanContactlist

An angular-cli, MEAN RESTful API for Heroku

# package.json changes for NodeJS

Changed from DevDependencies to Dependencies:

@angular/cli
@angular/compiler
@angular/compiler-cli


Other changes:

"scripts": {
  ...
  "start": "node server.js",
  ...
  "postinstall": "ng build --aot -prod"
}

These should match your local node and npm version:

"engines": {
  "node": "7.4.0",
  "npm": "4.0.5"
}

## MEAN RESTful API

This project uses examples from the tutorial "Create a Web App and RESTful API Server Using the MEAN Stack." Follow along by visiting https://devcenter.heroku.com/articles/mean-apps-restful-api

## Heroku

You should have an Heroku account and Heroku CLI installed.

Step 1: Create a git remote
$ heroku create

Step 2: Provision MongoDB
$ heroku addons:create mongolab

The database connection URI is stored as a config var in Heroku Dashboard > Settings

## Development server (Local)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build (Local)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

To view the tutorial where this app originated, check out
