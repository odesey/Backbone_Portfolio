app.views.SkillView = Backbone.View.extend({

  tagName: 'div',
  className: 'skill',
  template: JST['templates/_skill'],
  events: {
    'click .add-skill': 'addSkill',
    'dblclick .add-skill': 'editSkillName',
    'keypress .edit-title': 'updateTitle'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  addSkill: function() {
    console.log('add skill')
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  editSkillName: function() {
    this.$el.addClass('editing');
    this.$el.find('.editSkillName').show().focus().prev('h3').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
    }

    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  }
});