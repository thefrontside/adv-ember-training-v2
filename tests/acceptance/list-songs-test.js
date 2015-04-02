import Ember from 'ember';
import {
  module,
  test,
  skip
} from 'qunit';
import startApp from 'adv-ember-training/tests/helpers/start-app';
// import the createServer function from ../fixtures
// the syntax to import functions/vars is `import { foo } from '../bar';`

var App;

module('Acceptance: ListSongs', {
  setup: function() {
    App = startApp();
    // Assign this.server to createServer()
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    // Tear down by calling .shutdown() on this.server
  }
});

skip('visiting /oneplaylist/songs', function(assert) {
  visit('/oneplaylist/songs');

  andThen(function() {
    assert.equal(currentURL(), '/oneplaylist/songs');
  });
});

skip("shows all songs and playlist items", function(assert) {
  // First, visit the /oneplaylist/songs route just like above

  andThen(function() {
    // call assert.equal $(".spec-song-item").length, it should be 3
  });
  andThen(function() {
    // assert $(".spec-playlist-item") length is equal to 3
  });

});

skip("adding to playlist", function(assert) {
  // Visit the /oneplaylist/songs route

  andThen(function() {
    // Use the click helper to click ".spec-add-item:first"
  });

  andThen(function() {
    // assert that $("spec-playlist-item).length is now 4.
  });
});

skip("deleting from playlist", function(assert) {
  // Based on the above, write a test for deleting a playlist item.
  // HINT: The class for deleting an item is ".spec-remove-item"
});
