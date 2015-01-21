import Ember from 'ember';
import STATES from '../utils/states';

export default Ember.Controller.extend({
  formatState: function(state) {
    return `${state["alpha-2"]}: ${state.name}`;
  },

  matchStates: function(query, callback) {
    callback(STATES);
  }
});
