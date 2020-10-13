const path = require('path');

module.exports = {
  dev: {
    host: '0.0.0.0',
    port: 8080,
    proxyTable: {},
    useEslint: true,
    showEslintErrorsInOverlay: true,
    preProcessorsCss: 'less',
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    assetsPublicPath: '/',
    devtool: 'cheap-module-eval-source-map',
    poll: false,
    assetsSubDirectory: 'static',
    cacheBusting: true,
    cssSourceMap: true,
    extendLoader: [],
    define: undefined
  },
  build: {
    preProcessorsCss: 'less',
    bundleAnalyzerReport: false,
    index: path.resolve('./dist/index.html'),
    assetsRoot: path.resolve('./dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: 'eval',
    define: undefined
  }
};
