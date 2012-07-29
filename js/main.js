require.config({
	paths: {
		"Test"	: "mod/Test",
		"Child"	: "mod/Child"
	}
});
define(['app'], function(app) {

	window.app = app;

});