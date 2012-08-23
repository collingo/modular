define(["Parent/parent"], function(app) {

	console.log("Parent spec called");

	describe("Parent", function() {

		describe('JavaScript addition operator', function () {
			it('adds two numbers together', function () {
				expect(1 + 2).toEqual(3);
			});
		});

		describe('JavaScript subtraction operator', function () {
			it('subtracts one number from another', function () {
				expect(5 - 2).toEqual(3);
			});
		});

	});

});