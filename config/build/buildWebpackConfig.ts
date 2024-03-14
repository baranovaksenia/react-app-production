import webpack from "webpack"
import { buildDevServer } from "./buildDevServer"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { BuildOptions } from "./types/config"

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { paths, mode, isDev } = options
	return {
		mode: mode,
		// склеиваем путь к файлу
		entry: paths.entry,
		// куда будет собираться проект (название файла и путь)
		output: {
			filename: "[name].[contenthash].js",
			path: paths.build,
			// оставляем только финальную сборку
			clean: true,
		},

		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		devtool: isDev ? "inline-source-map" : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
