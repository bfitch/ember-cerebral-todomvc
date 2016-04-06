import Ember from 'ember';

export default {
	completedTodos: Ember.computed('todos', function() {
		return this.get('todos').filter(todo => todo.completed);
	}),

	incompleteTodos: Ember.computed('todos', function() {
		return this.get('todos').filter(todo => !todo.completed);
	}),

	allTodosCompleted: Ember.computed('todos', function() {
		return this.get('todos').every(todo => todo.completed);
	})
}
