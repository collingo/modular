require(['config'], function(config) {

	// setup require config
	require.config(config);

	// start application
	require(['App/app'], function(App) {

		window.app = App;

	});

});