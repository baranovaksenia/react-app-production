import webpack from "webpack"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { BuildOptions } from "./types/config"

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { paths, mode } = options
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
	}
}
