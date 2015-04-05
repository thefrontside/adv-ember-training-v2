import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Use classic .find() to grab all songs with Ember Data
    return this.store.find("song");
  },
  actions: {
    addSongToPlaylist: function(song) {
      alert("Implement me! Song: " + song.get("name"));
      // We need to:
      // 1) create a playlist-item record
      // 2) set its song to the song argument
      // 3) set its playlist to the Playlist model from the oneplaylist route
      // 4) call save() on the new playlistItem
      // HINT: Use this.modelFor("oneplaylist").get("playlist") to get the playlist
    }

    // Next, we need a removePlaylistItem action that just calls destroyRecord()
  }
});
