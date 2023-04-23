const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: {
      lib: "./src/lib/index.ts",
      demo: "./src/demo/index.ts"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "umd",
      library: "PowerGrid"
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]__[hash:base64:5]"
                },
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        title: "PowerGrid Demo",
        template: "src/demo/index.html"
      })
    ],
    resolve: {
      extensions: [".ts", ".js"]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist")
      },
      compress: true,
      port: 9000
    }
  };
};
