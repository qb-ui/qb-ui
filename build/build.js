require('shelljs/global')

process.env.NODE_ENV = 'production'

const ora = require('ora')
const webpack = require('webpack')
const merge = require('webpack-merge')
const prodWebpackConfig = require('./webpack.prod.conf')

const spinner = ora('building components for production...')

spinner.start()

const config = merge(prodWebpackConfig, {
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})

webpack(config, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(`${stats.toString({
      color: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n`)
})
