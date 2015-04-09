// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.typeof = 'SongQueue';
    console.log(this.typeof, 'initialize()');


    this.on('add', function(song){
      console.log('songQueue add event');
      console.log('songqueue', this);
      if (this.length === 1) { // first song in the queue
        console.log('***********************************************************');
      //this.set('currentSong', song);
        this.playFirst();

      }
      //this.get('songQueue').add(song);
    }, this);


  },

  playFirst: function(){
    console.log(this.typeof, 'playFirst()');
    this.at(0).play();
    //song.play();
  }



});