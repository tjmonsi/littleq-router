const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const babelOptions = {
  presets: [
    require('babel-preset-env')
  ],
  plugins: [require('babel-plugin-syntax-dynamic-import'), [
    require('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]]
};

module.exports = () => {
  return {
    entry: {
      main: path.resolve(__dirname, './index.js')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './')
    },
    resolve: {
      modules: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, '../node_modules')
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.js'),
          to: 'webcomponentsjs/[name].[ext]'
        },
        {
          from: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.map'),
          to: 'webcomponentsjs/[name].[ext]'
        }
      ]),
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        module: true,
        columns: true,
        // noSources: true,
        linToLine: true
      })
    ],
    module: {
      rules: [
        {
          // If you see a file that ends in .html, send it to these loaders.
          test: /\.html$/,
          // This is an example of chained loaders in Webpack.
          // Chained loaders run last to first. So it will run
          // polymer-webpack-loader, and hand the output to
          // babel-loader. This let's us transpile JS in our `<script>` elements.
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            },
            {
              loader: 'polymer-webpack-loader',
              options: {
                processStyleLinks: true
              }
            }
          ]
        },
        {
          // If you see a file that ends in .js, just send it to the babel-loader.
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: babelOptions
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    }
  }
}