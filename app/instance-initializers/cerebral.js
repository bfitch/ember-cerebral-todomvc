export function initialize(appInstance) {
  const emberData = appInstance.lookup('service:store');
  const controller = appInstance.lookup('cerebral:main');

  controller.addServices({
    store: emberData,
    ajax: Ember.$.ajax
  });
}

export default {
  name: 'cerebral',
  after: 'ember-data',
  initialize
};
