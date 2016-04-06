import addons from 'npm:cerebral-addons';
const {copy, push, toggle} = addons;
import {
  setAjaxDefaults, fetchTodos, markTodoAsEditing, closeInputById,
  createTodo, toggleEachCompletionStatus, updateTodoTitle,
  destroyTodo, toggleAllCompletionStatuses
} from 'ember-cerebral/actions';

export default {
  indexRouted: [
    setAjaxDefaults,
    fetchTodos,
    copy('input:/todos', 'state:/todos')
  ],
  editClicked: [
    markTodoAsEditing
  ],
  editInputClosed: [
    closeInputById
  ],
  filterUpdated: [
    copy('input:/activeFilter', 'state:/activeFilter')
  ],
  todoSubmitted: [
    copy('input:/title', 'state:/newTodo.title'),
    createTodo,
    copy('input:/response', push('state:/todos'))
  ],
  completeToggled: [
    toggleEachCompletionStatus
  ],
  todoTitleUpdated: [
    updateTodoTitle,
    closeInputById
  ],
  destroyClicked: [
    destroyTodo
  ],
  toggleAllClicked: [
    toggle('allMarkedCompleted'),
    toggleAllCompletionStatuses
  ],
  clearCompletedClicked: [
    ({state}) => {
      const incomplete = state.get('todos').filter(todo => !todo.completed);
      state.set('todos', incomplete);
    }
  ]
};
