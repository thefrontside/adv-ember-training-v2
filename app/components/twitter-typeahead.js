import Ember from 'ember';

export default Ember.Component.extend({
  initializeTypeahead: Ember.observer(function() {
    this.$('input.twitter-typeahead-input').typeahead({}, {});
  }).on('didInsertElement')
});
