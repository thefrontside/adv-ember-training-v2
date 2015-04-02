import Ember from 'ember';
import STATES from '../utils/states';

export default Ember.Route.extend({
  model: function() {
    return STATES;
  }
});
