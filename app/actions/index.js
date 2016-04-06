import addons from 'npm:cerebral-addons';
const {copy, push, toggle} = addons;

// API
export function setAjaxDefaults({}) {
  Ember.$.ajaxSetup({
    contentType: 'application/json',
    processData: false,
  });
}

export function fetchTodos({input,state,services,output}) {
  const {ajax} = services;

  ajax({
    url: `api/todos`,
    type: 'get'
  })
  .done(({todos}) => output({todos}));
}
fetchTodos.async = true;

// State
export function createTodo({state,services,output}) {
  const {ajax} = services;

  ajax({
    url: `api/todos`,
    type: 'post',
    data: state.get('newTodo')
  })
  .done(response => output({response}))
  .fail((response) => {debugger});
}
createTodo.async = true;

export function toggleEachCompletionStatus({input,state,output}) {
  const i       = state.get('todos').findIndex((todo) => todo.id === input.id);
  const todo    = state.findWhere('todos', {id: input.id});
  const newTodo = Object.assign({...todo}, {completed: !todo.completed});
  state.splice('todos', i ,1 , newTodo);
}

export function updateTodoTitle({input,state}) {
  const i       = state.get('todos').findIndex((todo) => todo.id === input.id);
  const todo    = state.findWhere('todos', {id: input.id});
  const newTodo = Object.assign({...todo}, {title: input.title});
  state.splice('todos', i ,1 , newTodo);
}

export function destroyTodo({input,state}) {
  const i = state.get('todos').findIndex((todo) => todo.id === input.id);
  state.splice('todos', i ,1);
}

export function toggleAllCompletionStatuses({input,state}) {
  const todos         = state.get('todos');
  const markCompleted = state.get('allMarkedCompleted');

  todos.forEach((todo) => {
    let i = todos.indexOf(todo);
    state.splice('todos', i, 1, Object.assign(
      {...todo}, {completed: markCompleted})
    );
  });
}

// UI
export function markTodoAsEditing({input,state}) {
  state.push('currentlyEditingTodoIds', input.id);
}

export function closeInputById({input,state}) {
  const i = state.get('currentlyEditingTodoIds').findIndex((id) => {
    return id === input.id;
  });
  state.splice('currentlyEditingTodoIds', i, 1);
}
