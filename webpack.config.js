const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    filename: isDevelopment ? '[name].js' : '[name][contenthash].js',
    assetModuleFilename: isDevelopment ? 'images/[name][ext]' : 'images/[contenthash][ext]',
    clean: true
  },
  mode: isDevelopment ? 'development' : 'production',
  stats: isDevelopment ? 'errors-warnings' : 'normal',
  devtool: isDevelopment ? 'eval-cheap-module-source-map' : false,
  devServer: {
    historyApiFallback: true,
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-react']
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
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, project.path.source, 'index.html'),
      title: project.title
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css'
    })
  ]
}
