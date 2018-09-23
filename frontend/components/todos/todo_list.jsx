import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const todos = this.props.todos;

    const todoItems = todos.map(todo => (
        <TodoListItem todo={todo}/>
    ));

    return (
      <div>
        <h3>list goes here</h3>
        <ul>
          { todoItems }
        </ul>


      </div>

    )
  }
}

export default TodoList;
