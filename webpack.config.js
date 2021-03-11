const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const project = {
  path: {
    source: 'source',
    build: 'public'
  },
  title: 'Webpack Boilerplate'
}

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, project.path.source, 'index.js')
  },
  output: {
    path: path.resolve(__dirname, project.path.build),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js'
  },
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    port: 9000,
    open: true,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, project.path.source, 'template.html'),
      title: project.title
    }),
    new CleanWebpackPlugin({})
  ]
}
