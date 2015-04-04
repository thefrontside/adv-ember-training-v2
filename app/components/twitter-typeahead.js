import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this._super.apply(this, arguments);
    var self = this;
    this.typeahead = this.$('input').typeahead({}, {
      displayKey: this.get('displayKey'),
      source: this.get('source')
    });
    this.typeahead.on('typeahead:selected', function(e, suggestion) {
      Ember.run(function() {
        self.sendAction("on-select", suggestion);
      });
    });
  }
});
