// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(){
    this.typeof = 'SongQueueView';
    console.log(this.typeof, 'initialize()');
  },

  render: function() {
    return this.$el;
  }

});
