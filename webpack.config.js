module.exports = {
  entry: './samples/index.js',
  output: {
    path: __dirname + '/samples',
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
