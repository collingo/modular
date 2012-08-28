define(["jQuery", "Backbone", "ParentMod", "ChildMod"], function($, Backbone, Parent, Child) {

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

	return App;

});