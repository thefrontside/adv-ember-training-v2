import {
  moduleForComponent,
  test,
  expect
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('cc-input', 'CcInputComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

var action, component;

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});

function setupComponent(test) {
  component = test.subject();

  test.append();
}

test("has no number property when the input is not valid", function(assert) {
  setupComponent(this);

  Ember.run(function() {
    component.set("value", "1234");
  });
  assert.equal(null, component.get('number'));
  assert.ok(component.$().is(":not(.is-valid)"), "does not contain is-valid class");
});

test("sets the number property", function(assert) {
  setupComponent(this);

  Ember.run(function() {
    component.set("value", "4242424242424242");
  });

  assert.ok(component.get("value"));
  assert.equal(component.get('number'), "4242424242424242");
  assert.ok(component.$().is(".is-valid"), "contains is-valid class");

  return new Ember.RSVP.Promise(function(resolve, reject){
    Ember.run.next(resolve);
  });
});
