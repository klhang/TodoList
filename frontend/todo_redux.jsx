import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;

const root = document.getElementById('content');

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<Root store={configureStore}/>, root);
})
