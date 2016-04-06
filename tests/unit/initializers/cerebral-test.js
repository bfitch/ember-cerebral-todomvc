import Ember from 'ember';
import CerebralInitializer from 'ember-cerebral/initializers/cerebral';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | cerebral', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  CerebralInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
