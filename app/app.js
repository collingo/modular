define(["jquery", "backbone", "Parent/parent", "Child/child"], function($, Backbone, Parent, Child) {

	window.Parent = Parent;
	window.Child = Child;

	var App = {
		parent: new Parent({
			id: "test"
		}),
		child: new Child({
			id: "Child1"
		})
	};

	$("body")
		.append(App.parent.render().el)
		.append(App.child.render().el);

	return App;

});