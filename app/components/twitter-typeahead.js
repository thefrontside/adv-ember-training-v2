import Ember from 'ember';

export default Ember.Component.extend({
  highlight: false,
  hint: true,
  "min-length": 0,
  minLength: Ember.computed.readOnly("min-length"),

  initializeTypeahead: Ember.observer(function() {
    var source = this.get('source');
    this.$('input.twitter-typeahead-input').typeahead(this.getProperties('highlight', 'hint', 'minLength'), {
      displayKey: this.get('displayKey') || function(object) { return object.toString();},
      source: source
    });
  }).on('didInsertElement')
});
