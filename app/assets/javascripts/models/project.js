app.models.Project = Backbone.Model.extend({

	localStorage: new Backbone.LocalStorage('portfolio'),

	initialize: function() {
		this.bind("change", this.updateTitle);
		this.bind("change", this.updateDescription);
	},

	updateTitle: function() {
		this.attributes.title;
	},

	updateDescription: function() {
		this.attributes.description;
	}

});