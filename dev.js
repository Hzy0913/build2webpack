#!/usr/bin/env node
'use strict';
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const devWebpackConfig = require('./webpack.dev.conf.js');
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const Chalk = require('chalk')

const cwdPath = process.cwd();
const config = require(`${cwdPath}/config`)
const utils = require('./utils')
const compiler = Webpack(devWebpackConfig);
const devServerOptions = Object.assign({}, devWebpackConfig.devServer);
const server = new WebpackDevServer(compiler, devServerOptions);

const basePort = process.env.PORT || devWebpackConfig.devServer.port;

portfinder.getPort({port: basePort, stopPort: basePort + 1000}, (err, port) => {
  process.env.PORT = port
  devWebpackConfig.devServer.port = port

  server.listen(port, '127.0.0.1');
});

