// const { resolve } = require('path');
const path = require('path');
const rules = require('vue-webpack-loaders');

module.exports = {
	components: './components/**/[A-Z]*.vue',
	// load tachyons to render styleguide components, may need to extend this if we extend tachyons?
	require: [
		path.join(__dirname, 'node_modules/tachyons/css/tachyons.min.css')
	],
	defaultExample: true,

	webpackConfig: {
		resolve: {
			extensions: ['.js', '.json', '.vue', '.ts'],
			alias: {
				'~': path.resolve(__dirname),
				'@': path.resolve(__dirname),
			},
		},
		module: {
			rules,
		},
	},
	vuex: './store/index',
};
