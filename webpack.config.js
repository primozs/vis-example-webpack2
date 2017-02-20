const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  performance: {
    hints: false
  },
  context: path.resolve('src'),
  entry: [
    'webpack-dev-server/client?http://localhost:3333',
    './app.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './src/public',
    hot: true,
    historyApiFallback: true,
    inline: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: true
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            [require.resolve('babel-preset-es2015'), { "modules": false }]
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'CLIENT': JSON.stringify('true')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    modules: [
      'node_modules'
    ]
  }
};
