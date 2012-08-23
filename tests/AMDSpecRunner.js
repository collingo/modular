/**
 * Executes Jasmine tests across all specs files
 */
require(['../app/config'], function(config) {

	// alter basepath for tests
	config.baseUrl = '../app';

	// setup global require config
	require.config(config);

	// pull down tests and execute jasmine
	require(["../tests/tests"], function() {

		jasmineEnv.execute();

	});

});