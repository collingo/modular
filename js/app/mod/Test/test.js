define(["Underscore", "Test/mixin"], function(_, mixin) {

	function Test(id) {
		this.id = id;
	}
	Test.prototype = {
		constructor: Test,
		methodA: function() {

		},
		methodB: function() {

		},
		methodC: function() {

		}
	};

	if(true) {
		_.extend(Test.prototype, mixin);
	}

	return Test;

});