import Ember from 'ember';

export default Ember.Controller.extend({
  selectedState: null,

  // UNCOMMENT AND BIND ME TO SOURCE FIRST (STEP 3)
  // Naive callback, bind this to `source` in state-entry.hbs
  listAllStates: Ember.computed("model", function() {
    const states = this.get("model");
    return function(query, callback) {
      callback(states);
    };
  }),

  // UNCOMMENT AND BIND ME TO DISPLAYKEY (STEP 3)
  formatState: function(state) {
    return `${state.get("abbrev")}: ${state.get("name")}`;
  },

  // UNCOMMENT AND BIND ME TO SOURCE SECOND (STEP 4)
  // Filtering callback, bind this to `source` in state-entry.hbs
  // matchStates: Ember.computed("model", function() {
  //   const states = this.get("model");
  //   return function(query, callback) {
  //     callback(states.filter(function(state) {
  //       // Clear out when field is empty
  //       if (!query) {
  //         states.setEach("isHighlighted", false);
  //         states.setEach("isSelected", false);
  //         return null;
  //       }
  //       var regex = new RegExp(query, 'i');

  //       if (regex.test(state.get("name")) || regex.test(state.get("abbrev"))) {
  //         state.set("isHighlighted", true);
  //         return true;
  //       } else {
  //         state.set("isHighlighted", false);
  //         return false;
  //       }
  //     }));
  //   };
  // }),

  actions: {
    selectState: function(state) {
      alert("Implement me! selected state: " + state);
      // Set selectedState to the state. That's it!
    }
  },


  // Highlight only the selected state
  setSelectedState: Ember.observer("selectedState", function() {
    this.get("model").setEach("isHighlighted", false);
    this.get("model").setEach("isSelected", false);
    if(this.get("selectedState")) {
      this.get("selectedState").set("isSelected", true);
    }
  })

});
