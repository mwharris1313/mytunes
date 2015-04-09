// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log('songQueue initialize');
    console.log('SongQueue', this);
  },

  enqueue: function(){
    console.log('Firing SongQueue Enqueue');
  }

});