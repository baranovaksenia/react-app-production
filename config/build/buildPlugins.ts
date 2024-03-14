import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildPlugins({
	paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		// HTMLWebpackPlugin configuration
		new HTMLWebpackPlugin({
			// Configure HTMLWebpackPlugin settings
			// Use index.html as the template for the build process
			template: paths.html,
		}),

		// webpack ProgressPlugin for build progress tracking
		new webpack.ProgressPlugin(),
	]
}
