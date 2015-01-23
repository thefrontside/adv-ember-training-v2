import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return Ember.$.getJSON("/user.json").then(function(response){
      Ember.run(function() {
        store.pushPayload("user", response);
      });
      return store.find("user", response.user.id);
    });
  }
});
