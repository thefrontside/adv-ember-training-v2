import Ember from 'ember';
import { isDigit, CardInputParser } from 'adv-training-helpers';

export default Ember.TextField.extend(CardInputParser, {
  eventManager: {
    keyPress: function(event) {
      if (!isDigit(event)) {
        event.preventDefault();
      }
    }
  }
});
