import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'adv-ember-training/tests/helpers/start-app';
import { createServer } from '../fixtures';

var App;

module('Acceptance: ListSongs', {
  setup: function() {
    App = startApp();
    // Assign this.server to createServer()
    this.server = createServer();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    // Tear down by calling .shutdown() on this.server
    this.server.shutdown();
  }
});

test('visiting /oneplaylist/songs', function(assert) {
  visit('/oneplaylist/songs');

  andThen(function() {
    assert.equal(currentURL(), '/oneplaylist/songs');
  });
});

test("shows all songs and playlist items", function(assert) {
  // First, visit the /oneplaylist/songs route just like above
  visit('/oneplaylist/songs');

  andThen(function() {
    // call assert.equal $(".spec-song-item").length, it should be 3
    assert.equal($(".spec-song-item").length, 3);
  });
  andThen(function() {
    // assert $(".spec-playlist-item") length is equal to 3
    assert.equal($(".spec-playlist-item").length, 3);
  });
});

test("adding to playlist", function(assert) {
  // Visit the /oneplaylist/songs route
  visit('/oneplaylist/songs');

  andThen(function() {
    // Use the click helper to click ".spec-add-item:first"
    click(".spec-add-item:first");
  });

  andThen(function() {
    // assert that $("spec-playlist-item).length is now 4.
    assert.equal($(".spec-playlist-item").length, 4);
  });
});

test("deleting from playlist", function(assert) {
  // Based on the above, write a test for deleting a playlist item.
  // HINT: The class for deleting an item is ".spec-remove-item"
  visit('/oneplaylist/songs');

  andThen(function() {
    click(".spec-remove-item:first");
  });

  andThen(function() {
    assert.equal($(".spec-playlist-item").length, 2);
  });
});
