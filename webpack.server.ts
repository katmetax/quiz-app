import path from 'path';
import nodeExternals from 'webpack-node-externals';

// const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.tsx',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: 'index.js'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
  }
};
