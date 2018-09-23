import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault;
    let newTodo = Object.assign({}, this.state);
    this.props.receiveTodo(newTodo);
    this.setState({
      title: "",
      body: "",
      done: false
    })
    console.log(newTodo);

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
        <input type="text" ref="title" value={this.state.title} onChange={this.update("title")} required/>
        </label>

        <label>
          Body:
        <textarea type="text" ref="body "value={this.state.body} onChange={this.update("body")} required/>
        </label>


        <button type="submit">
          Submit
        </button>
      </form>
    )
  }
}

export default TodoForm;
