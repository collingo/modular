define([

	// parent prototype
	"test",

	// mixins
	"childMixin"

], function(

	// parent prototype
	Test,

	// mixins
	childMixin
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

	// extend the prototype with additional functionality via mixins
	if(true) {
		_.extend(Child.prototype, childMixin);
	}

	return Child;

});