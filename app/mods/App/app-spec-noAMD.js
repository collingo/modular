describe("App", function() {

	describe('when instantiated', function () {
		it('adds the Parent class to window object', function () {
			expect(window.Parent).toBeDefined();
		});
		it('adds the Child class to window object', function () {
			expect(window.Child).toBeDefined();
		});
	});

	describe('JavaScript subtraction operator', function () {
		it('subtracts one number from another', function () {
			expect(5 - 2).toEqual(3);
		});
	});

});