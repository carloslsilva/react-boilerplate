const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    filename: isDevelopment ? '[name].js' : '[contenthash].js',
    assetModuleFilename: isDevelopment ? 'images/[name][ext]' : 'images/[contenthash][ext]'
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
              importLoaders: 1,
              modules: {
                compileType: 'module',
                auto: true,
                localIdentName: isDevelopment ? '[name]__[local]' : '[contenthash:base64]',
                exportLocalsConvention: 'camelCase'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, project.path.source, 'template.html'),
      title: project.title
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css'
    }),
    new CleanWebpackPlugin({})
  ]
}
