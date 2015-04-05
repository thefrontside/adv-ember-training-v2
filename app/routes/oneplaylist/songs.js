import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Use classic .find() to grab all songs with Ember Data
    return this.store.find("song");
  },
  actions: {
    addSongToPlaylist: function(song) {
      this.store.createRecord('playlist-item', {
        song: song,
        playlist: this.modelFor("oneplaylist").get('playlist')
      }).save();
    }

    // Next, we need a removePlaylistItem action that just calls destroyRecord()
  }
});
