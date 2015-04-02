import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  artist: DS.attr(),
  amazonUrl: DS.attr()
});
