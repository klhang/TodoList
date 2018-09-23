import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const todos = this.props.todos;
    const receiveTodo = this.props.receiveTodo;

    const todoItems = todos.map(todo => (
        <TodoListItem todo={todo} />
    ));

    return (
      <div>
        <h3>list goes here</h3>
        <ul>
          { todoItems }
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </div>

    )
  }
}

export default TodoList;
