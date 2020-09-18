const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [{
      test: /.js$/,
      use: ["babel-loader"]
    },
    {
      test: /.css$/,
      use: [
        isProduction ?
          MiniCssExtractPlugin.loader :
          "style-loader",
        "css-loader"
      ]
    }
    ],
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
  devServer: {
    hot: true
  }
};

if (isProduction) {
  config.plugins.push(new MiniCssExtractPlugin({
    filename: "[name].css",
  }));
};