import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["oneplaylist"],
  currentUser: Ember.computed.readOnly("controllers.oneplaylist.model")
});
