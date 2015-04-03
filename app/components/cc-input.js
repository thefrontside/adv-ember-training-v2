import Ember from 'ember';
import { isDigit, CardInputParser } from 'adv-training-helpers';

export default Ember.TextField.extend(CardInputParser, {
  classNameBindings: ["isValid"],
  isValid: Ember.computed.reads("parser.isValidCard"),

  eventManager: {
    keyPress: function(event) {
      if (!isDigit(event)) {
        event.preventDefault();
      }
    }
  }
});
