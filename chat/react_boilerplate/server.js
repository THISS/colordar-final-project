var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 2000
  }
  })
  .listen(3002, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3002');
  });
