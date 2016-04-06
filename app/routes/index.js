export default Ember.Route.extend({
  init() {
    this.get('cerebral').getSignals().indexRouted();
    this._super(...arguments);
  },

  model(params) {
    this.get('cerebral').getSignals().filterUpdated({
      activeFilter: params.filter
    });
  }
});
