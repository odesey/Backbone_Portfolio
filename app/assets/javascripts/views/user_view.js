app.views.UserView = Backbone.View.extend({

	className: 'bio',
	tagName: 'div',
	id: 'bio',
	template: _.template($('#user-template').html()),
	render: function() {
		//get the html template
		var html = this.template({
			user: this.model
		});
		//append it to thes views div#bio element
		this.$el.html(html);
		//attach it to the DOM
		$('#user-bio').html(this.el);
		return this;
	}

});