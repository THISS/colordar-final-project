#!usr/bin/env bash

yarn remove node-sass
yarn add node-sass@latest
webpack -p --config ./webpack.prod.config.js --progress
# node_modules/.bin/knex migrate:latest
# node_modules/.bin/knex seed:run
