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
      'main': path.resolve(__dirname, './index.js'),
      'landing-page': path.resolve(__dirname, './pages/landing-page/index.js'),
      'login-page': path.resolve(__dirname, './pages/login-page/index.js'),
      'page-one': path.resolve(__dirname, './pages/page-one/index.js'),
      'page-two': path.resolve(__dirname, './pages/page-two/index.js'),
      'page-three': path.resolve(__dirname, './pages/page-three/index.js'),
      'page-four': path.resolve(__dirname, './pages/page-four/index.js'),
      'page-two-sub-one': path.resolve(__dirname, './pages/page-two-sub-one/index.js'),
      'page-two-sub-two': path.resolve(__dirname, './pages/page-two-sub-two/index.js'),
      'page-three-sub-one': path.resolve(__dirname, './pages/page-three-sub-one/index.js'),
      'page-three-sub-two': path.resolve(__dirname, './pages/page-three-sub-two/index.js'),
      'page-404': path.resolve(__dirname, './pages/page-404/index.js'),
      'middleware-all': path.resolve(__dirname, './middlewares/middleware-all.js'),
      'middleware-one': path.resolve(__dirname, './middlewares/middleware-one.js'),
      'middleware-two': path.resolve(__dirname, './middlewares/middleware-two.js'),
      'middleware-three': path.resolve(__dirname, './middlewares/middleware-three.js'),
      'middleware-four': path.resolve(__dirname, './middlewares/middleware-four.js')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './script')
    },
    resolve: {
      modules: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, '../node_modules')
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common' // Specify the common bundle's name.
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.js'),
          to: './[name].[ext]'
        },
        {
          from: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.map'),
          to: './[name].[ext]'
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