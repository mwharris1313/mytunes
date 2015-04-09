// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.typeof = 'SongModel';
    console.log(this.typeof, 'initialize()');
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log('SongModel play()');
    //console.log('this:', this);
    this.trigger('play', this);
    //this.trigger('enqueue', this);
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log(this.typeof, 'enqueue()');
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log(this.typeof, 'dequeue()');
    this.trigger('dequeue', this);
  },

  ended: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log(this.typeof, 'ended()');
    this.trigger('ended', this);
  },



});
