// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  initialize: function(){
    this.typeof = 'SongQueueEntryView';
    console.log(this.typeof, 'initialize()');
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      //this.model.play();
      // console.log(this);
      // this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
    //return this.$el.html(this.template(this.model.ty));
  }




});
