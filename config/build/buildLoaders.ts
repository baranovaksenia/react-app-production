import webpack from "webpack"

/**
 * Function to configure and return an array of webpack loaders.
 * @returns {Array} An array of configured webpack loaders.
 */
export function buildLoaders(): webpack.RuleSetRule[] {
	// Define a loader configuration for TypeScript files
	const typescriptLoader: webpack.RuleSetRule = {
		// Regular expression for file extensions
		// Match files with .tsx or .ts extensions and pass them through the ts-loader
		test: /\.tsx$/,
		// Specify the loader to use
		use: "ts-loader",
		// Exclude the node_modules folder from processing
		exclude: /node_modules/,
	}

	// The order of loaders is important; add more loaders if needed
	return [typescriptLoader]
}
