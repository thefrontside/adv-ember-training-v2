import Pretender from 'pretender';
import Ember from 'ember';

export function createServer() {
  return new Pretender(function() {
    this.get("/user.json", function(req) {
      return [200, {"Content-Type": "application/json"}, JSON.stringify(userFixture())];
    });
    this.get("/songs", function(req) {
      return [200, {"Content-Type": "application/json"}, JSON.stringify(songsFixture())];
    });
    this.get("/songs/:id", function(req) {
      return [200, {"Content-Type": "application/json"}, JSON.stringify(songsFixture(req.params.id))];
    });
    this.post("/playlist/items", function(req){
      return [201, {"Content-Type": "application/json"}, JSON.stringify(playlistItemFixture())];
    });
    this.delete("/playlist/items/:id", function(req){
      return [200, {"Content-Type": "application/json"}, JSON.stringify({})];
    });
  });
}


export function userFixture() {
  return {
    "playlists":[
      {
        "id":2,
        "playlist_item_ids":[2,3,4]
      }
    ],
    "playlist_items":[
      {
        "id":2,
        "song_id":1,
        "playlist_id":2
      },
      {
        "id":3,
        "song_id":3,
        "playlist_id":2
      },
      {
        "id":4,
        "song_id":2,
        "playlist_id":2
      }
    ],
    "user": {
      "id":2,
      "email":"",
      "playlist_id":2
    }
  };
}

export function songsFixture(id) {
  var songFixtures = {
    "1": {
      "id":1,
      "name":"Look Away",
      "artist":"Chicago",
      "amazon_url":"http://www.amazon.com/Look-Away/dp/B00124AIB4/ref=sr_1_1?ie=UTF8\u0026qid=1422036864\u0026sr=8-1\u0026keywords=chicago+look+away\u0026pebp=1422036868522\u0026peasin=B00124AIB4","created_at":"2015-01-23T18:15:05.237Z","updated_at":"2015-01-23T18:15:47.226Z"
    },
    "2": {
      "id":2,
      "name":"Songbird",
      "artist":"Kenny G",
      "amazon_url":"http://www.amazon.com/Songbird/dp/B004LHQ318/ref=sr_1_1?ie=UTF8\u0026qid=1422038250\u0026sr=8-1\u0026keywords=kenny+g+songbird\u0026pebp=1422038258667\u0026peasin=B004LHQ318","created_at":"2015-01-23T18:38:09.515Z","updated_at":"2015-01-23T18:38:09.515Z"
    },
    "3": {
      "id":3,
      "name":"Sailing",
      "artist":"Christopher Cross",
      "amazon_url":"http://www.amazon.com/Sailing/dp/B002ZJTJUQ/ref=sr_1_sc_1?ie=UTF8\u0026qid=1422038677\u0026sr=8-1-spell\u0026keywords=chistopher+cross+sailing\u0026pebp=1422038687592\u0026peasin=B002ZJTJUQ","created_at":"2015-01-23T18:45:29.102Z","updated_at":"2015-01-23T18:45:29.102Z"
    }
  };

  if(arguments.length) {
    return songsFixture[id];
  } else {
    var songsArray = Object.keys(songFixtures).map(function(k){return songFixtures[k];});
    return {songs: songsArray};
  }
}

export function playlistItemFixture(id) {
  return {"playlist_item":{"id":5,"song_id":3,"playlist_id":2}};
}
