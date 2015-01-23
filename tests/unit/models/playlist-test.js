import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('playlist', 'Playlist', {
  // Specify the other units that are required for this test.
  needs: ["model:playlist-item", "model:song", "model:user"]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
