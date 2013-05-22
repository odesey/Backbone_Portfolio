describe("A User", function() {
	var user;

	beforeEach(function() {
		user = new app.models.User({
			first_name: 'Ed',
			last_name: 'Elias',
			image_url: 'uploads/me.jpg',
			bio: 'Cloud architect in another life.',
			mission: 'Get rich or die prying!'
		});
	});

	is("should know how to pring the entire name", function() {
		expect(user.full_name()).toEqual("Ed Elias");
	});
});