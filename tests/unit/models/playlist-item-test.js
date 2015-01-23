import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('playlist-item', 'PlaylistItem', {
  // Specify the other units that are required for this test.
  needs: ["model:song", "model:playlist", "model:user"]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
