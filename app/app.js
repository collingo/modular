define(["jquery", "Backbone", "Test/test", "Child/child"], function($, Backbone, Test, Child) {

	window.Test = Test;
	window.Child = Child;

	var App = {
		test: new Test({
			id: "test"
		}),
		child: new Child({
			id: "Child1"
		})
	};

	$("body")
		.append(App.test.render().el)
		.append(App.child.render().el);

	return App;

});