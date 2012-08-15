require.config({
	paths: {

		// libraries
		jQuery: "/js/lib/jquery/jquery",
		Underscore: "/js/lib/lodash/lodash",
		Backbone: "/js/lib/backbone/backbone",

		// require plugins
		text: '/js/lib/require/text',

		// modules
		"Test" : "mod/Test",
		"Child": "mod/Child"
	},
	shim: {
		'Underscore': {
			exports: '_'
		},
		'Backbone': {
			deps: ['Underscore', 'jQuery'],
			exports: 'Backbone'
		}
	}
});
define(['app'], function(app) {

	window.app = app;

});