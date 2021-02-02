const path = require('path')
function resolve (src) {
  return path.resolve(__dirname, src)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}