import { BuildOptions } from "./types/types";
import { ModuleOptions } from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      // importLoaders: 1,
      modules: { localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]" },
      esModule: false,
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [tsLoader, scssLoader];
}
