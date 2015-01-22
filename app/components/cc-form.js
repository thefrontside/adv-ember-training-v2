import Ember from 'ember';

var Form = Ember.Object.extend({
  number: null,
  type: null,
  name: null,
  exp: null,
  ccv: null
});

export default Ember.Component.extend({
  card: null,
  form: Ember.computed(function() {
    if (this.get("card")) {
      return Form.create(this.get("card").getProperties("number", "type", "name", "exp", "ccv"));
    } else {
      return Form.create();
    }
  })
});
