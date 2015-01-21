/*global sinon */

import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';
import startApp from "../../helpers/start-app";

var App;

moduleForComponent('twitter-typeahead', 'TwitterTypeaheadComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  setup: function() { App = startApp(); },
  teardown: function() { Ember.run(App, App.destroy); }
});

var spiedSourceFunc = sinon.spy(function(query, callback) {
  return callback([query.toLowerCase(), query.toUpperCase()]);
});


test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject({source: spiedSourceFunc});
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('entering in keys', function() {
  expect(3);
  var component = this.subject({source: spiedSourceFunc});
  this.append();
  andThen(function() {
    var typeahead = $(".tt-input");
    typeahead.val("te");
    typeahead.trigger("input");
  });
  andThen(function() {
    equal(component.$(".tt-suggestion").length, 2);
    equal(component.$(".tt-suggestion:first").text().trim(), "te");
    equal(component.$(".tt-suggestion:last").text().trim(), "TE");
  });
});
