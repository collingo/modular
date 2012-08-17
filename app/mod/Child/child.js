define([

	// libs
	"jquery",
	"Backbone",
	"Underscore",

	// templates
	"text!Child/main.html",

	// parent prototype
	"Test/test",

	// explicit mixins

	// conditional mixins
	(Modernizr.canvas)?"Child/childMixin":null,
	(!Modernizr.canvas)?"Child/childMixin":null,
	(Modernizr.canvas)?"Child/childMixin2":null

], function(

	// libs
	$,
	Backbone,
	_,

	// templates
	Template,

	// parent prototype
	Test

	// explicit mixins

	// conditional mixins

) {

	var View = Test.extend({

		// template for the item
		template: _.template(Template),

		// events for each item
		events: {
		},

		// init
		initialize: function() {
			// re-render the view when the model is updates
			//this.model.on('change', this.render, this);

			// remove a model when it's destroyed in the collection
			//this.model.on('destroy', this.remove, this);
		},

		// render
		render: function() {

			// put the data in the template
			this.$el.html(this.template({title: this.id}));

			// return to mainitain chainability
			return this;
		},

		// custom methods
		methodA: function() {

		},
		methodB: function() {

		},
		methodC: function() {

		}

	}),
	i;

	// extend the view with conditional mixins
	for (i = 1; i < arguments.length; i++) {

		// extend the prototype with additional functionality via mixins
		if(arguments[i]) {
			View.extend(arguments[i]);
		}
	}

	return View;

});