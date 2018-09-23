import React from 'react';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    // const {title} = todo;
    const title = todo.title;
    const {id} = todo;
    return (
      <div>
        <li>
          {title}
          {id}
        </li>
      </div>
    )
  }
}

export default TodoListItem;
