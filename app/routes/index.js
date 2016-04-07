export default Ember.Route.extend({
  init() {
    this.get('signals').indexRouted();
    this._super(...arguments);
  },

  model(params) {
    this.get('signals').filterUpdated({
      activeFilter: params.filter
    });
  }
});
