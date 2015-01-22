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
  }),

  validNumber: Ember.computed("isValidCard", function() {
    if(this.get("isValidCard")) {
      return this.get("strippedInput");
    } else {
      return null;
    }
  }),

  // Validation logic below
  isValidCard: Ember.computed.and('isLongEnough', 'passesLuhnCheck'),

  isLongEnough: Ember.computed('type', 'strippedInput.length', function() {
    switch(this.get('type')) {
    case 'diners':
    case 'amex':
      return this.get('strippedInput.length') === 15;
    default:
      return this.get('strippedInput.length') === 16;
    }
  }),

  passesLuhnCheck: Ember.computed('strippedInput', function() {
    var value = this.get('strippedInput');
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) {return false;}

    // The Luhn Algorithm. It's so pretty.
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n);
      nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigit *= 2) > 9) {nDigit -= 9;}
      }

      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) === 0;
  })
});
