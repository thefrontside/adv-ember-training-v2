import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this._super.apply(this, arguments);
    this.$('input').typeahead({}, {
      displayKey: this.get('displayKey'),
      source: this.get('source')
    });
  }
});
