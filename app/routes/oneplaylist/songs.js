import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find("song");
  },
  actions: {
    addSongToPlaylist: function(song) {
      this.store.createRecord('playlist-item', {
        song: song,
        playlist: this.modelFor("oneplaylist").get('playlist')
      }).save();
    }
  }
});
