import Ember from 'ember';
import Form from '../utils/form';

export default Ember.Component.extend({
  form: Ember.computed(function() {
    return Form.create();
  })
});
