import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: EnterCard', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

var assertDisabled = function() {
  equal(Ember.$(".spec-pay-button").prop("disabled"), true);
};
var assertEnabled = function() {
  equal(Ember.$(".spec-pay-button").prop("disabled"), false);
};

test('visiting /enter-card and entering valid information', function() {
  visit('/card-entry');

  andThen(function() {
    equal(currentPath(), 'card-entry');
  });
  andThen(function() {
    assertDisabled();
  });

  fillIn(".spec-cc-input", "4242424242424242");
  andThen(function() {
    assertDisabled();
  });

  fillIn(".spec-cc-name", "Bob Dobalina");
  andThen(function() {
    assertDisabled();
  });

  fillIn(".spec-cc-exp", "12/2016");
  andThen(function() {
    assertDisabled();
  });

  fillIn(".spec-cc-ccv", "123");
  andThen(function() {
    assertEnabled();
  });

  fillIn(".spec-cc-exp", "6");
  andThen(function() {
    assertDisabled();
  });
});
