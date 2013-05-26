app.views.NewUser = Backbone.View.extend({

//****************************************************************************************
  // app.views.NewUser = Backbone.View.extend({

  //   tagName: 'div',
  //   id: 'bio',
  //   template: JST['templates/_userform'],
  //   render: function() {
  //     console.log("create a new user with Backbone -- render in the new.js file")
  //     // Get some HTML from somewhere
  //     var html = this.template({user: this.model });
  //     // Append it to this view's div#bio element
  //     this.$el.html(html);

  //     return this;
  //   }

  // });

//****************************************************************************************
  el: 'div',
  tagName: 'div',
  id: 'bio',
  template: JST['templates/_userform'],
  render: function (options) {
    var that = this;

    // if(options.id) 
    //   that.user = new app.models.User({id: options.id});
    //   that.user.fetch({
    //     success: function(user) {
    //       // var template = _.template($('#edit-user-template').html(), {user: user});
    //       // template($(.html(), {user: user}));
    //       that.$el.html(template);
    //     }
    //   })

  
    // var template = _.template($('#edit-user-template').html(), {user: null});
    this.$el.html(this.template());
    return this;
             
  },
  events: {
    'submit': 'saveUser',
    'click .delete': 'deleteUser'
  },
  saveUser: function(ev) {
    console.log("i am in the save user function");
    var user = new app.models.User();
    var userDetails = $(ev.currentTarget);
    console.log(userDetails);
    // var userDetails = $(ev.currentTarget).serializeObject();
    
    user.save(userDetails, {
      success: function (user) {
        router.navigate('users', {trigger: true});
      },
      error : function(error){
        console.log(error);
        console.log("br");
      }
    })
    return false;
  },
  deleteUser: function (ev) {
    this.user.destroy({
      success: function () {
        router.navigate('', {trigger: true});
      }
    })
    return false;
  }
});
