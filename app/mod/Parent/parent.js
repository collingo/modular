define([

	// libs
	"jquery",
	"backbone",
	"underscore",

	// templates
	"text!Parent/main.html",

	// mixins
	"Parent/mixin"

], function(

	// libs
	$,
	Backbone,
	_,

	// templates
	Template,

	// mixins
	mixin

) {

	var View = Backbone.View.extend({

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
	});

	return View;

});