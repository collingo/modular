define([

	// parent prototype
	"Test/test",

	// explicit mixins

	// conditional mixins
	(Modernizr.canvas)?"Child/childMixin":null,
	(!Modernizr.canvas)?"Child/childMixin":null,
	(Modernizr.canvas)?"Child/childMixin2":null

], function(

	// parent prototype
	Test

	// explicit mixins

	// conditional mixins
	// !!! DO NOT REFERENCE !!!

) {

	function Child(id) {
		Test.call(this, id);
	}
	Child.prototype = new Test();
	Child.prototype.constructor = Child;
	_.extend(Child.prototype, {
		childA: function() {

		},
		childB: function() {

		},
		childC: function() {

		}
	});

	// extend the prototype with conditional mixins
	for (var i = 1; i < arguments.length; i++) {

		// extend the prototype with additional functionality via mixins
		if(arguments[i]) {
			_.extend(Child.prototype, arguments[i]);
		}
	};

	return Child;

});