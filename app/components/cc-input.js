import Ember from 'ember';
import Parser from '../utils/card-parser';

export default Ember.TextField.extend({
  parser: Ember.computed(function() {
    return Parser.create({
      inputBinding: Ember.Binding.oneWay("component.value"),
      component: this
    });
  }),

  valueBinding: Ember.Binding.oneWay("parser.formattedOutput"),

  setNumber: Ember.observer("parser.strippedInput", function() {
    this.set("number", this.get("parser.strippedInput"));
  }),

  eventManager: {
    keyPress: function(e) {
      if (!String.fromCharCode(e.charCode).match(/\d/)) {
        e.preventDefault();
      }
    }
  }
});
