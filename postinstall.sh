#!usr/bin/env bash

yarn remove node-sass
yarn add node-sass@latest
webpack -p --config ./webpack.prod.config.js --progress
echo "rollback DB"
node_modules/.bin/knex migrate:rollback
echo "migrate latest DB"
node_modules/.bin/knex migrate:latest
echo "seed DB"
node_modules/.bin/knex seed:run
echo "post setup complete"
