// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.typeof = 'SongModel';
    console.log(this.typeof, 'initialize()');
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log('SongModel play()');
    this.trigger('play', this);
  },

  // enqueue: function(){
  //   // should bubble up to the SongQueue
  //   console.log('SongModel.js enqueue');
  //   this.trigger('enqueue', this);
  // }



});
