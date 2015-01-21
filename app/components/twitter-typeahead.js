import Ember from 'ember';

export default Ember.Component.extend({
  highlight: false,
  hint: true,
  "min-length": 0,
  minLength: Ember.computed.readOnly("min-length"),

  initializeTypeahead: Ember.observer(function() {
    var _this = this;
    var source = this.get('source');
    this.typeahead = this.$('input.twitter-typeahead-input').typeahead(this.getProperties('highlight', 'hint', 'minLength'), {
      displayKey: this.get('displayKey') || function(object) { return object.toString();},
      source: source
    });
    this.typeahead.on('typeahead:selected', function(e, suggestion) {
      Ember.run(function() {
        _this.sendAction("on-select", suggestion);
      });
    });
  }).on('didInsertElement'),

  destroyTypeahead: Ember.observer(function() {
    this.typeahead.off("typeahead:selected");
  }).on("willDestroyElement")
});
