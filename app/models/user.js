import DS from 'ember-data';

export default DS.Model.extend({
  playlist: DS.belongsTo("playlist")
});
