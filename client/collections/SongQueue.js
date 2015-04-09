// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.typeof = 'SongQueue';
    console.log(this.typeof, 'initialize()');
  },

});