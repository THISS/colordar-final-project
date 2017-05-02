var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
path = require('path');

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, "client/public"),
  publicPath: config.output.publicPath,
  watchOptions: {
    ignored: [/node_modules/,/server/],
    aggregateTimeout: 300,
    poll: 1000
  }
})
.listen(3000, '0.0.0.0',  (err, result) =>{
  if (err) {
    console.log(err);
  }
  console.log('Running at http://0.0.0.0:3000');
});
