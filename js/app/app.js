define(["Backbone", "Test/test", "Child/child"], function(Backbone, Test, Child) {

	window.Test = Test;
	window.Child = Child;

	var app = {
		testA: new Test("testA"),
		testB: new Test("testB"),
		testC: new Test("testC"),
		child: new Child("childA")
	};

	return app;

});