export default function(server) {
  const users = server.createList('user', 5);

  const todos = users.map(user => {
      return server.create('todo', { user_id: randomItem(users).id });
    })
    .concat(users.map(user => {
      return server.create('todo', { user_id: randomItem(users).id });
    }));

  const comments = todos.map(todo => {
    return server.create('comment', {
      todo_id: randomItem(todos).id,
      user_id: randomItem(users).id
    });
  });
}

function randomItem(collection) {
  const index = Math.floor(Math.random() * collection.length);
  return collection[index];
}
