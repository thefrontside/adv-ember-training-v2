import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // This might be a good time to try Ember.$.ajax() and this.store.pushPayload :)
    var store = this.store;
    return Ember.$.getJSON("/user.json").then(function(response){
      Ember.run(function() {
        store.pushPayload("user", response);
      });
      return store.find("user", response.user.id);
    });
  }
});
