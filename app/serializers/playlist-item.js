import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize: function(playlistItem, options) {
    var json = this._super(playlistItem, options);
    delete json.playlist_id;
    return json;
  }
});
