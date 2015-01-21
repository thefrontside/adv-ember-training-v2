import Ember from 'ember';
import STATES from '../utils/states';

export default Ember.Controller.extend({
  formatState: function(state) {
    return `${state["alpha-2"]}: ${state.name}`;
  },

  matchStates: function(query, callback) {
    callback(STATES.filter(function(state) {
      var regex = new RegExp(query, 'i');
      return regex.test(state.name) || regex.test(state["alpha-2"]);
    }));
  }
});
