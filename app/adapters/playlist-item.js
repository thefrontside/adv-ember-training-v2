import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // if we need id for nested resource purposes, use this:
  // buildURL: function(type, id, record) {
  //   var url = this._super(type, id, record);
  //   var playlistId = record.get("playlist.id");
  //   var modifiedURL = "/playlist/" + playlistId + url;
  //   return modifiedURL;
  // }

  // But we don't need the ID, so we'll use this instead:
  buildURL: function(type, id, record) {
    var url = this._super("item", id, record);
    var modifiedURL = "/playlist" + url;
    return modifiedURL;
  }
});
