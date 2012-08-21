require.config({
	paths: {

		// libraries
		// jquery: "/lib/jquery/jquery",
		// Underscore: "/lib/underscore/underscore",
		jquery: "/lib/zepto/zepto",
		underscore: "/lib/lodash/lodash",
		backbone: "/lib/backbone/backbone",

		// require plugins
		text: '/lib/require/text',

		// modules
		"Parent" : "mod/Parent",
		"Child": "mod/Child"
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});
require(['app'], function(App) {

	window.app = App;

});