import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  serialize: function(playlistItem, options) {
    var json = this._super(playlistItem, options);
    delete json.playlist_id;
    return json;
  }
});
