import CardParser from '../../../utils/card-parser';

var parser;
module('cardParser', {
  setup: function () {
    parser = CardParser.create();
  }
});

test('with a visa card number', function() {
  parser.set("input", "424242");
  equal(parser.get("formattedOutput"), "4242 42");

  parser.set("input", "4242424242424242");
  equal(parser.get("formattedOutput"), "4242 4242 4242 4242");
});

test('with an invalid number', function() {
  parser.set("input", "02483204");
  equal(parser.get("formattedOutput"), "0248 3204");

  parser.set("input", "0248320438562728");
  equal(parser.get("formattedOutput"), "0248 3204 3856 2728");
});

test('with an Amex card number', function() {
  parser.set("input", "37828224631");
  equal(parser.get("formattedOutput"), "3782 822463 1");

  parser.set("input", "378282246310005");
  equal(parser.get("formattedOutput"), "3782 822463 10005");
});

test('with a Mastercard card number', function() {
  parser.set("input", "5555555555554444");
  equal(parser.get("formattedOutput"), "5555 5555 5555 4444");
});

test('with a Discover card number', function() {
  parser.set("input", "6011111111111117");
  equal(parser.get("formattedOutput"), "6011 1111 1111 1117");
});

test('with a Diners Club card number', function() {
  parser.set("input", "30569309025904");
  equal(parser.get("formattedOutput"), "3056 9309 0259 04");
});

test('with a JCB card number', function() {
  parser.set("input", "3530111333300000");
  equal(parser.get("formattedOutput"), "3530 1113 3330 0000");
});
