define(["test", "child"], function(Test, Child) {

	var app = {
		testA: new Test("testA"),
		testB: new Test("testB"),
		testC: new Test("testC"),
		child: new Child("childA")
	};

	return app;

});