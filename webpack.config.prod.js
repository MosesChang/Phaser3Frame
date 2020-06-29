const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  entry: './src/app.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
    filename: '[name].[contenthash].js',   // 分離每一個npm包需要這個，有加上西哈值
  },

  // 分出遊戲與vendor包
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // 分離每一個npm包
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //     maxInitialRequests: Infinity,
  //     minSize: 0,
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name(module) {
  //           // get the name. E.g. node_modules/packageName/not/this/part.js
  //           // or node_modules/packageName
  //           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  //           // npm package names are URL-safe, but some servers don't like @ symbols
  //           return `npm.${packageName.replace('@', '')}`;
  //         },
  //       },
  //     },
  //   },
  // },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },

  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
            warnings: false
        },
        mangle: {
            safari10: true
        },
        output: {
            safari10: true
        },
        safari10: true
      },
      sourceMap: false,
      parallel: true
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};