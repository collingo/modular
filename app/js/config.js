/**
 * Returns global requirejs config object
 * @return {object} requirejs config object
 */
define({
	baseUrl: "../mods",
	paths: {

		// libraries
		jQuery: "../libs/jquery/jquery",
		// Underscore: "../libs/underscore/underscore",
		// jQuery: "../libs/zepto/zepto",
		underscore: "../libs/lodash/lodash",
		Backbone: "../libs/backbone/backbone",

		// require plugins
		text: '../libs/require/text',

		// modules
		"AppMod": "App/js/app",
		"ParentMod" : "Parent/js/parent",
		"ChildMod": "Child/js/child"
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