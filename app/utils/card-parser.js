import Ember from 'ember';

var VISA_REGEX = /^4/;
var MASTERCARD_REGEX = /^5[1-5]/;
var AMEX_REGEX = /^3[47]/;
var DISCOVER_REGEX = /^6(?:011|5)/;
var DINERS_CLUB_REGEX = /^3(?:0[0-5]|[68])/;
var JCB_REGEX = /^(?:2131|1800|35)/;

export default Ember.Object.extend({
  type: Ember.computed("input", function() {
    var input = this.get("input") || "";
    if (input.match(VISA_REGEX)) {return "visa";}
    else if (input.match(MASTERCARD_REGEX)) {return "mastercard";}
    else if (input.match(AMEX_REGEX)) {return "amex";}
    else if (input.match(DISCOVER_REGEX)) {return "discover";}
    else if (input.match(DINERS_CLUB_REGEX)) {return "diners";}
    else if (input.match(JCB_REGEX)) {return "jcb";}
    else {return Ember.undefined;}
  }),

  strippedInput: Ember.computed('input', function() {
    var input = this.get("input") || "";
    var stripped = input.replace(/\s+/g, "");
    return stripped;
  }),

  formattedOutput: Ember.computed("strippedInput", "type", function() {
    var num = this.get('strippedInput');
    if (this.get("type") === "amex") {
      return [num.substring(0,4), num.substring(4,10), num.substring(10,15)].join(" ").trim();
    } else {
      // Visa etc format like XXXX XXXX XXXX XXXX
      return [num.substring(0,4), num.substring(4,8), num.substring(8,12), num.substring(12,16)].join(" ").trim();
    }
  })
});
