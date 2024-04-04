let path = require("path")

module.exports = {
    // Other configuration options...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };