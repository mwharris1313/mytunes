// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(){
    this.typeof = 'SongQueueView';
    console.log(this.typeof, 'initialize()');
    this.render();
  },

  tagName: "table",



  // render: function() {
  //   return this.$el;
  // }

  render: function(){
    console.log(this.typeof, 'render()');
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();


    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
