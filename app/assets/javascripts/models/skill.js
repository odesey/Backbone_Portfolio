app.models.Skill = Backbone.Model.extend({


	initialize: function() {
		this.bind("change", this.updateTitle);
	},

	updateTitle: function() {
		this.attributes.title += " Changed";
	}

});