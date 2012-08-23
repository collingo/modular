/**
 * Returns global requirejs config object
 * @return {object} requirejs config object
 */
define({
	paths: {

		// libraries
		// jquery: "/lib/jquery/jquery",
		// Underscore: "/lib/underscore/underscore",
		jQuery: "lib/zepto/zepto",
		underscore: "lib/lodash/lodash",
		Backbone: "lib/backbone/backbone",

		// require plugins
		text: 'lib/require/text',

		// modules
		"App": "mods/App",
		"Parent" : "mods/Parent",
		"Child": "mods/Child"
	},
	shim: {
		'jQuery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'Backbone': {
			deps: ['underscore', 'jQuery'],
			exports: 'Backbone'
		}
	}
});