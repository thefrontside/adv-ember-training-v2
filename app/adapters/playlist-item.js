import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    var url = this._super("item", id, record);
    var modifiedURL = "/playlist" + url;
    return modifiedURL;
  }
});
