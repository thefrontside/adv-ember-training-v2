import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  // This stuff is for CORS, but we can use proxy instead.
  // host: 'http://oneplaylist.herokuapp.com',
  // ajax: function(url, method, hash) {
  //   hash.crossDomain = true;
  //   hash.xhrFields = {withCredentials: true};
  //   return this._super(url, method, hash);
  // }
});
