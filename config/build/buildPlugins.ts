import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ mode, paths }: BuildOptions): Configuration["plugins"] {
  const isProd = mode === "production";
  const isDev = mode === "development";

  const plugins: Configuration["plugins"] = [new HtmlWebpackPlugin({ template: paths.html })];

  if (isDev) {
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      })
    );
  }

  return plugins;
}
