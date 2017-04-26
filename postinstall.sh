#!usr/bin/env bash

yarn remove node-sass
yarn add node-sass@latest
webpack -p --config ./webpack.prod.config.js --progress