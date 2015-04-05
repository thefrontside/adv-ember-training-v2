import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
  // After creating analytics, call reportEvent on every transition

    didTransition: function() {
      this.analytics.reportEvent({
        type: 'pageView',
        location: window.location.href
      });
    }

  }
});
