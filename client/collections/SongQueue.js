// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.typeof = 'SongQueue';
    console.log(this.typeof, 'initialize()');


    this.on('add', function(song){
      console.log('songQueue add event');
      if (this.length === 1) { // first song in the queue
        console.log('***********************************************************');
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song){
      console.log('songQueue ended event');
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      console.log('songQueue dequeue event');
      this.remove(this.at(0));
    }, this);


  },

  playFirst: function(){
    console.log(this.typeof, 'playFirst()');
    this.at(0).play();
    //song.play();
  }



});