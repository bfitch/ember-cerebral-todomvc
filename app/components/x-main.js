import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import computedMixin from 'ember-cerebral/computed/todos';

export default Ember.Component.extend(computedMixin, {
  filteredTodos: Ember.computed('activeFilter', 'todos', 'incompleteTodos', 'completedTodos', function() {
    switch (this.get('activeFilter')) {
      case 'active':
        return this.get('incompleteTodos');
        break;
      case 'completed':
        return this.get('completedTodos');
        break;
      default:
        return this.get('todos');
    }
  }),

  actions: {
    toggleAllClicked() {
      this.get('signals').toggleAllClicked();
    }
  },

  layout: hbs`
    {{#if filteredTodos.length}}
      <section class="main">
        <input class="toggle-all"
					type="checkbox"
          checked={{allTodosCompleted}}
					onclick={{action 'toggleAllClicked'}}>
        <label for="toggle-all">Mark all as complete</label>

        <ul class="todo-list">
          {{#each filteredTodos as |todo|}}
            {{todo-item todo=todo}}
          {{/each}}
        </ul>
      </section>
    {{/if}}
  `
});
