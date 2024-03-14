import path from "path"
import webpack from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { BuildEnv, BuildPaths } from "./config/build/types/config"

// Export the webpack configuration
export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.ts"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
	}

	const mode = env.mode || "development"
	const PORT = env.port || 3000

	const isDev = mode === "development"

	// Define the webpack configuration with specified types for autocomplete
	const config: webpack.Configuration = buildWebpackConfig({
		mode: mode,
		paths,
		isDev,
		port: PORT,
	})
	return config
}
