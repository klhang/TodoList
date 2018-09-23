// //action creator that returns an object with the type property and playload infomation
//
//
// export const RECEIVE_TODOS = 'RECEIVE_TODOS';
// export const RECEIVE_TODO = 'RECEIVE_TODO';
//
// export const receiveTodos = todos => ({
//   type: RECEIVE_TODOS,
//   todos: todos
// });
//
// export const receiveTodo = todo => ({
//   type: RECEIVE_TODO,
//   todo: todo
// });


export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
})
