import Controller from 'npm:cerebral';
import Model from 'npm:cerebral-model-baobab';
import Devtools from 'npm:cerebral-module-devtools';
import state from 'ember-cerebral/state';
import signals from 'ember-cerebral/signals';

export function initialize(application) {
  const model       = Model(state, {immutable: false});
  const controller  = Controller(model);
  controller.baobab = model.tree;

  controller.addModules({
    devtools: Devtools()
  });

  controller.addSignals(signals);

  application.register('cerebral:main', controller, { instantiate: false });
  application.register('cerebral:signals', controller.getSignals(), { instantiate: false });

  application.inject('component', 'cerebral', 'cerebral:main');
  application.inject('route', 'cerebral', 'cerebral:main');
  application.inject('component', 'signals', 'cerebral:signals');
  application.inject('route', 'signals', 'cerebral:signals');
}

export default {
  name: 'cerebral',
  initialize
};
