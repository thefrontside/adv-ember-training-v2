import Ember from 'ember';

var Form = Ember.Object.extend({
  number: null,
  type: null,
  name: null,
  exp: null,
  ccv: null

  // EMBER COMPTUTED MACROS!

  // Use Ember.computed.gte to compute "name.length" as greater or equal to 3
  // nameIsValid: <IMPLEMENT ME>,

  // Use .test() to test this.get("exp") for a regex match
  // expIsValid: Ember.computed("exp", function() {
  //   var expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  //   return expRegex.test(this.get("exp"));
  // }),

  // Just like expIsValid, test against the regex
  // ccvIsValid: Ember.computed("ccv", function() {
  //   var ccvRegex = /\d{3,4}/;
  //   return <IMPLEMENT ME>
  // }),

  // Use Ember.computd.bool to cast "number" as true or false
  // numberIsValid: <IMPLEMENT ME>

  // Use Ember.computed.and for numberIsValid, nameIsValid, expIsValid, and ccvIsValid
  // isSubmittable: <IMPLEMENT ME>

  // Use Ember.computed.not on "isSubmittable"
  // isInvalid: <IMPLEMENT ME>
});

export default Form;
