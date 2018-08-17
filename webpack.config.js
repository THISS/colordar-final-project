const env = process.env.NODE_ENV;
const debug = env !== "production";
const path = require('path');

const paths = {
  app: path.resolve(__dirname, "client/src/"),
  styles: path.resolve(__dirname, 'client/src/sass/'),
  build: path.resolve(__dirname, 'client/public/'),
};

module.exports = {
  mode: env,
  devtool: debug ? "inline-sourcemap" : false,
  devServer: {
    contentBase: paths.build,
    host: '0.0.0.0',
    port: 8080,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /(node_modules|server)/
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  entry: {
    app: path.join(paths.app, "index.js")
  },
  output: {
    publicPath: '/',
    filename: 'js/[name]-generated.js',
    path: paths.build,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
