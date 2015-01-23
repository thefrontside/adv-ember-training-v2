import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo("user"),
  playlistItems: DS.hasMany("playlist-item")
});
