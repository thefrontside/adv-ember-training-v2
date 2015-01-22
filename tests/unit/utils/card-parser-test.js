import CardParser from '../../../utils/card-parser';

var parser;
module('cardParser', {
  setup: function () {
    parser = CardParser.create();
  }
});

test('with an Amex card number', function() {
  parser.set("input", "37828224631");
  equal(parser.get("formattedOutput"), "3782 822463 1");

  parser.set("input", "378282246310005");
  equal(parser.get("formattedOutput"), "3782 822463 10005");
});
