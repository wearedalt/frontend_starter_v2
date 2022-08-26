const { merge } = require("webpack-merge");
const common = require("./webpack.common");

console.log("MODE : production");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].min.css",
    }),
  ],
});
