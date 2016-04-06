import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import computedMixin from 'ember-cerebral/computed/todos';

export default Ember.Component.extend(computedMixin, {
	countDescription: Ember.computed('todos', function() {
		return this.get('todos').length === 1 ? 'item' : 'items';
	}),

	actions: {
		clearCompletedClicked() {
			this.get('signals').clearCompletedClicked();
		}
	},

  layout: hbs`
		{{#if todos.length}}
	    <footer class="footer">
	      <span class="todo-count">
					<strong>{{incompleteTodos.length}}</strong>
					{{countDescription}} left
				</span>

	      <ul class="filters">
	        <li>{{#link-to 'index' '' activeClass='selected'}}All{{/link-to}}</li>
	        <li>{{#link-to 'index' 'active' activeClass='selected'}}Active{{/link-to}}</li>
	        <li>{{#link-to 'index' 'completed' activeClass='selected'}}Completed{{/link-to}}</li>
	      </ul>

				{{#if completedTodos.length}}
					<button class="clear-completed" onclick={{action 'clearCompletedClicked'}}>Clear completed</button>
				{{/if}}
	    </footer>
		{{/if}}
  `
});
