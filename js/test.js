define(["mixin"], function(mixin) {

	function Test(id) {
		this.id = id;
	}
	Test.prototype = {
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