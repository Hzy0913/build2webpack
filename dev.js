#!/usr/bin/env node
'use strict';
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const Chalk = require('chalk')

const cwdPath = process.cwd();
const config = require(`${cwdPath}/config`)
const utils = require('./utils')

const basePort = process.env.PORT || config.dev.port;

portfinder.getPort({port: basePort, stopPort: basePort + 1000}, (err, port) => {
  process.env.PORT = port
  const devWebpackConfig = require('./webpack.dev.conf.js');
  devWebpackConfig.devServer.port = port
  const devServerOptions = Object.assign({}, devWebpackConfig.devServer);
  const compiler = Webpack(devWebpackConfig);

  const server = new WebpackDevServer(compiler, devServerOptions);
  server.listen(port, '127.0.0.1');
});
