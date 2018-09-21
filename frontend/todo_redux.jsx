import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store';
import {receiveTodos, receiveTodo} from './actions/todo_actions';

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

const root = document.getElementById('content');

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<h1>react will take over here!!!</h1>, root);
})
