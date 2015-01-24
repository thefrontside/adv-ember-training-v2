import Ember from 'ember';
import startApp from '../helpers/start-app';
import {createServer} from '../fixtures';

var App;

module('Acceptance: ListSongs', {
  setup: function() {
    App = startApp();
    this.server = createServer();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    this.server.shutdown();
  }
});

test('visiting /oneplaylist/songs', function() {
  visit('/oneplaylist/songs');

  andThen(function() {
    equal(currentURL(), '/oneplaylist/songs');
  });
});

test("shows all songs and playlist items", function() {
  visit("/oneplaylist/songs");

  andThen(function() {
    equal($(".spec-song-item").length, 3);
  });
  andThen(function() {
    equal($(".spec-playlist-item").length, 3);
  });

});

test("adding to playlist", function() {
  visit("/oneplaylist/songs");

  andThen(function() {
    click(".spec-add-item:first");
  });

  andThen(function() {
    equal($(".spec-playlist-item").length, 4);
  });

});
