require.config({
	paths: {

		// libraries
		// jquery: "/lib/jquery/jquery",
		// Underscore: "/lib/underscore/underscore",
		jquery: "/lib/zepto/zepto",
		Underscore: "/lib/lodash/lodash",
		Backbone: "/lib/backbone/backbone",

		// require plugins
		text: '/lib/require/text',

		// modules
		"Test" : "mod/Test",
		"Child": "mod/Child"
	},
	shim: {
		'Underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		},
		'Backbone': {
			deps: ['Underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});
require(['app'], function(App) {

	window.app = App;

});