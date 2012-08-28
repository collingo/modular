require(['config'], function(config) {

	// setup require config
	require.config(config);

	// start application
	require(['AppMod'], function(App) {

		window.app = App;

	});

});