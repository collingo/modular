require.config({
	paths: {

		// libraries
		jquery: "/js/lib/jquery/jquery",
		Underscore: "/js/lib/underscore/underscore",
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
			deps: ['Underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});
require(['app'], function(App) {

	window.app = App;

});