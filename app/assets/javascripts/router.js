app.Router = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'users/:id' : 'userShow',
    'users' : 'allUsers',
    'newUser' : 'newUser'
  },

  home: function() {
    var view = new app.views.Home();
    $('#content').html(view.render().el);
  },

  newUser: function() {
    console.log("create a new user with Backbone -- function in the router.js file")
    var view = new app.views.NewUser();
    $('#content').html(view.render().el);
  },

  userShow: function(user_id) {
    var user = new app.models.User({id: user_id});
    user.fetch({
      success: function(user, response, options) {
        var view = new app.views.ProjectView({ model : user });
        $('#content').html(view.render().el);
      }
    });

  },
  allUsers: function() {
    console.log("i am in the allUsres function")
    var users = new app.collections.UserList();
    user.fetch({
      success: function(user, response, options) {
        // var view = new app.views.ProjectView({ model : user });
        $('#content').html(view.render().el);
      }
    });

  }

});