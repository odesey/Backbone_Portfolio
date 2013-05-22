app.models.User = Backbone.Model.extend({
	full_name: function() {
		return this.attributes.first_name + " " + this.attributes.last_name;
	}

});

// app.models.User = Backbone.Model.extend({

// 	validate: function() {
// 		if(typeof first_name == undefined || first_name == null || first_name.length == 0)
// 			return "invalid";

// 	}
// });