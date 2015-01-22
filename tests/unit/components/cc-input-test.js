/*global sinon */

import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('cc-input', 'CcInputComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

var action, component;

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

function setupComponent(test) {
  component = test.subject();

  test.append();
}

test("has no number property when the input is not valid", function() {
  setupComponent(this);

  Ember.run(function() {
    component.set("value", "1234");
  });
  equal(null, component.get('number'));
  ok(component.$().is(":not(.is-valid-card)"), "does not contain is-valid-card class");
});

test("sets the number property", function() {
  setupComponent(this);

  Ember.run(function() {
    component.set("value", "4242424242424242");
  });

  ok(component.get("value"));
  equal(component.get('number'), "4242424242424242");
  ok(component.$().is(".is-valid-card"), "contains is-valid-card class");
});
