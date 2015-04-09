// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.typeof = 'LibraryEntryView';
    console.log(this.typeof, 'initialize()');
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function(e) {
      console.log(this.typeof, 'events:click');
      console.log('this:', this);
      console.log('this.model:', this.model);
      this.model.play();
      this.model.enqueue();

    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
