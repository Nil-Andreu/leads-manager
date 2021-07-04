module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/, // For any js file
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };