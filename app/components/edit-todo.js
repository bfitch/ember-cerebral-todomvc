import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('input').focus();
  },

  actions: {
    inputReceived(event) {
      if (event.keyCode === 27) {
        this.get('onEscapePress')();
      } else if (event.keyCode === 13) {
        this.get('onEnterPress')({
          title: event.target.value,
          id: this.get('todo').id
        });

      }
    }
  },

  layout: hbs`
    <input class="edit"
      onkeyup={{action 'inputReceived'}}
      value={{todo.title}}>
  `
});
