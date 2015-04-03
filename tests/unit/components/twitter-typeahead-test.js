/*global sinon */

import {
  moduleForComponent,
  test,
  expect
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('twitter-typeahead', 'TwitterTypeaheadComponent', {
});

var spiedSourceFunc = sinon.spy(function(query, callback) {
  return callback([query.toLowerCase(), query.toUpperCase()]);
});

var spiedDisplayKeyFunc = sinon.spy(function(object) {
  return object.toString();
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject({
    source: spiedSourceFunc,
    displayKey: spiedDisplayKeyFunc
  });
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});

test('entering in keys', function(assert) {
  assert.expect(3);
  var component = this.subject({
    source: spiedSourceFunc,
    displayKey: spiedDisplayKeyFunc
  });
  this.append();
  andThen(function() {
    var typeahead = $(".tt-input");
    typeahead.val("te");
    typeahead.trigger("input");
  });
  andThen(function() {
    assert.equal(component.$(".tt-suggestion").length, 2);
    assert.equal(component.$(".tt-suggestion:first").text().trim(), "te");
    assert.equal(component.$(".tt-suggestion:last").text().trim(), "TE");
  });
});

test('selecting a response', function(assert) {
  var selectSpy = sinon.spy();
  var component = this.subject({
    source: spiedSourceFunc,
    displayKey: spiedDisplayKeyFunc,
    "on-select": "doSelect",
    targetObject: {"doSelect": selectSpy}
  });

  this.append();

  andThen(function() {
    var typeahead = $(".tt-input");
    typeahead.val("te");
    typeahead.trigger("input");
  });

  andThen(function() {
    component.$(".tt-suggestion:first").click();
  });

  andThen(function() {
    // Replace the assertion below.
    // Assert that selectSpy was called with argument "te"
    assert.ok(false);
  });
});
