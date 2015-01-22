import Ember from 'ember';
import Parser from '../utils/card-parser';

export default Ember.TextField.extend({
  classNameBindings: ["parser.isValidCard"],

  parser: Ember.computed(function() {
    return Parser.create({
      inputBinding: Ember.Binding.oneWay("component.value"),
      component: this
    });
  }),

  valueBinding: Ember.Binding.oneWay("parser.formattedOutput"),

  setNumber: Ember.observer("parser.validNumber", function() {
    this.set("number", this.get("parser.validNumber"));
  }).on("didInsertElement"),

  eventManager: {
    keyPress: function(e) {
      if (!String.fromCharCode(e.charCode).match(/\d/)) {
        e.preventDefault();
      }
    }
  }
});
