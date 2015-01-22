import Ember from 'ember';

export default Ember.TextField.extend({
  eventManager: {
    keyPress: function(e) {
      if (!String.fromCharCode(e.charCode).match(/\d/)) {
        e.preventDefault();
      }
    }
  }
});
