import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import CerebralMixin from 'ember-cerebral/mixins/cerebral-mixin';

export default Ember.Component.extend(CerebralMixin, {
  cerebralProps() {
    return {
      currentlyEditingTodoIds: 'currentlyEditingTodoIds'
    }
  },

  styles: Ember.computed('isEditing', 'todo', function() {
    const editing = this.get('isEditing') ? 'editing' : '';
    const completed = this.get('todo.completed') ? 'completed' : '';
    return `${completed} ${editing}`;
  }),

  isEditing: Ember.computed('currentlyEditingTodoIds', 'todo', function() {
    return this.get('currentlyEditingTodoIds').includes(this.get('todo.id'));
  }),

  actions: {
    editClicked(event) {
      this.get('signals').editClicked({
        id: this.get('todo.id')
      });
    },
    editInputClosed() {
      this.get('signals').editInputClosed({
        id: this.get('todo.id')
      });
    },
    todoTitleUpdated(event) {
      this.get('signals').todoTitleUpdated(event);
    },
    completeToggled() {
      this.get('signals').completeToggled({
        id: this.get('todo.id')
      });
    },
    destroyClicked() {
      this.get('signals').destroyClicked({
        id: this.get('todo.id')
      });
    }
  },

  layout: hbs`
    <li class={{styles}}>
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          checked={{todo.completed}}
          onclick={{action 'completeToggled'}}>
        <label ondblclick={{action 'editClicked'}}>{{todo.title}}</label>
        <button class="destroy" onclick={{action 'destroyClicked'}}></button>
      </div>
			{{#if isEditing}}
				{{edit-todo
          todo=todo
          onEscapePress=(action 'editInputClosed')
          onEnterPress=(action 'todoTitleUpdated')
        }}
			{{/if}}
    </li>
  `
});
