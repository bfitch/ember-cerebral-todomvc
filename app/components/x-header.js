import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  keyDown(event) {
    if (event.keyCode === 13) {
      this.get('signals').todoSubmitted({
        title: event.target.value
      });
      event.target.value = '';
    }
  },

  layout: hbs`
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
  `
});
