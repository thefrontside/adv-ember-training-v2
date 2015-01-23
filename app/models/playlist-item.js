import DS from 'ember-data';

export default DS.Model.extend({
  song: DS.belongsTo("song"),
  playlist: DS.belongsTo("playlist")
});
