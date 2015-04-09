// QueueView.js - Defines a backbone view class for the music queue.
var QueueView = Backbone.View.extend({

  initialize: function(){
    this.typeof = 'QueueView';
    console.log(this.typeof, 'initialize()');
  },

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new QueueEntryView({model: song}).render();
      })
    );
  }

});
