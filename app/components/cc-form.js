import Ember from 'ember';

var Form = Ember.Object.extend({
  number: null,
  type: null,
  name: null,
  exp: null,
  ccv: null,
  nameIsValid: Ember.computed.gte("name.length", 3),
  expIsValid: Ember.computed("exp", function() {
    var expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return expRegex.test(this.get("exp"));
  }),
  ccvIsValid: Ember.computed("ccv", function() {
    var ccvRegex = /\d{3,4}/;
    return ccvRegex.test(this.get("ccv"));
  }),
  isSubmittable: Ember.computed.and("number", "nameIsValid", "expIsValid", "ccvIsValid"),
  isInvalid: Ember.computed.not("isSubmittable")
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
