/// <reference path="../../typings/tsd.d.ts" />

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config');

const app = new WebpackDevServer(webpack(config), {
  progress: true,
  inline: true,
  hot: true,
  historyApiFallback: true,
  // contentBase: __dirname + '/../public',
  publicPath: '/static/',
  stats: { colors: true },
  // proxy: { '*': 'http://localhost:3000' },
});

app.listen(3001, 'localhost', function() {
  process.send && process.send('express ready');
});
