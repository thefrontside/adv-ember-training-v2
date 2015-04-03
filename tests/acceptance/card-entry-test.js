import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'adv-ember-training/tests/helpers/start-app';

var application;

module('Acceptance: EnterCard', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /enter-card and entering valid information', function(assert) {
  visit('/card-entry');

  andThen(function() {
    assert.equal(currentPath(), 'card-entry');
  });
  andThen(function() {
    assert.equal(Ember.$(".spec-pay-button").prop("disabled"), true);
  });

  fillIn(".spec-cc-input", "4242424242424242");
  andThen(function() {
    assert.equal(Ember.$(".spec-pay-button").prop("disabled"), true);
  });

  fillIn(".spec-cc-name", "Bob Dobalina");
  andThen(function() {
    assert.equal(Ember.$(".spec-pay-button").prop("disabled"), true);
  });

  fillIn(".spec-cc-exp", "12/2016");
  andThen(function() {
    assert.equal(Ember.$(".spec-pay-button").prop("disabled"), true);
  });

  fillIn(".spec-cc-ccv", "123");
  andThen(function() {
    assert.equal(Ember.$(".spec-pay-button").prop("disabled"), false);
  });

  // Let's put an invalid expiration date in there and make sure it disables again
  // HINT: Look above to see how that'd be implemented.
  fillIn(".spec-cc-exp", "6");
  andThen(function() {
    assert.equal(Ember.$(".spec-pay-button").prop("disabled"), true);
  });


});

test('clicking submit on valid form', function(assert) {
  visit('/card-entry');
  fillIn(".spec-cc-input", "4242424242424242");
  fillIn(".spec-cc-name", "Bob Dobalina");
  fillIn(".spec-cc-exp", "12/2016");
  fillIn(".spec-cc-ccv", "123");
  click(".spec-pay-button");

  andThen(function() {
    assert.equal(Ember.$(".spec-success-message").text().trim(), "Success!");
  });
});
