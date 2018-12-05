const buidMyPackage = require('build-my-package')
const path = require('path')

const { buildUMD } = buidMyPackage

buildUMD({
  entry: path.join(__dirname, './src/CanvasDomLine.js'),
  library: 'CanvasDomLine',
  filename: 'index.js'
})
