/** @typedef {import('next').NextConfig} NextConfig */
import path from 'path';

const ifProduction = (truthy, falsy) => {
	return /^(?:production)$/i.test(process.env.NODE_ENV) ? truthy : falsy;
};

const getWebpackConfigRules = (config) => config.module.rules
	.find((rule) => typeof rule.oneOf === 'object')
	.oneOf.filter((rule) => Array.isArray(rule.use))
	;

const iterateWebpackRules = (config, next) => {
	getWebpackConfigRules(config).forEach((rule) => {
		rule.use.forEach((moduleLoader) => {
			next(moduleLoader, rule);
		});
	});
};

const findWebpackModuleLoader = (config, search, next) => {
	iterateWebpackRules(config, (moduleLoader, rule) => {
		if (
			search.test(moduleLoader.loader) &&
			typeof moduleLoader.options.modules === 'object'
		) next(moduleLoader, rule, config);
	});
};

/**
 * @type {NextConfig}
 */
const nextConfig = {
	/**
	 * @see https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
	 */
	reactStrictMode: true,

	/**
	 * @see https://nextjs.org/docs/basic-features/built-in-css-support#customizing-sass-options
	 */
	sassOptions: {
		outputStyle: 'expanded',
		includePaths: [path.resolve('src/styles')],
		prependData: `
			$HTTPS: ${!!process.env.HTTPS};
			$VERBOSE: ${!!process.env.VERBOSE};
			$NODE_ENV: "${process.env.NODE_ENV}";
			@import "@unkn/styles/sass/data";
			@import "~/theme/tokens.color";
			@import "~/theme/tokens.font";
			@import "~/theme/tokens.layout";
		`,
	},

	/**
	 * @see https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
	 */
	webpack(config) {
		findWebpackModuleLoader(config, /\bcss-loader\b/, (moduleLoader, _rule) => {
			moduleLoader.options = {
				...moduleLoader.options,
				modules: {
					...moduleLoader.options.modules,
					exportLocalsConvention: 'camelCase',
					localIdentName: ifProduction('[name][local]--[hash:base64:5]', '[name][local]'),
					// getLocalIdent: (_ctx, _localIdentName, localName) => localName.replace(/_-/g, ''),
				},
			};
		});
		return config;
	},
};

export default nextConfig;

