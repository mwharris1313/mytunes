// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.typeof = 'SongQueue';
    console.log(this.typeof, 'initialize()');
  },

  // enqueue: function(song){
  //   //this.add(song);
  //   console.log('SongQueue.js enqueue',this);
  //   console.log('Firing SongQueue Enqueue');
  // }

});