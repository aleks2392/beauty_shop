const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'build'),
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader', options: { esModule: false, modules: { localIdentName: "[name]__[local]--[hash:base64:5]" }}}],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 3001,
    open: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
