import { ResolveOptions } from "webpack"

/**
 * Function to configure and return webpack resolvers.
 * @returns {Object} Webpack resolvers configuration.
 */
export function buildResolvers(): ResolveOptions {
	return {
		// File extensions to resolve
		extensions: [".ts", ".js", ".tsx"],
		// Add more resolver configurations if needed
	}
}
