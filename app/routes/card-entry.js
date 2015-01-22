import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitCard: function(form) {
      console.log("success! card submitted:", form);
      this.controllerFor("card-entry").set("success", true);
    }
  }
});
