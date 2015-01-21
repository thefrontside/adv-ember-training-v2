import Ember from 'ember';

export default Ember.Component.extend({
  initializeTypeahead: Ember.observer(function() {
    var source = this.get('source');
    this.$('input.twitter-typeahead-input').typeahead({}, {
      source: source
    });
  }).on('didInsertElement')
});
