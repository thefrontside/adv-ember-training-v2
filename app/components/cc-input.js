import Ember from 'ember';
import { isDigit } from 'adv-training-helpers';

export default Ember.TextField.extend({

  eventManager: {
    keyPress: function(event) {
      if (!isDigit(event)) {
        event.preventDefault();
      }
    }
  }
});
