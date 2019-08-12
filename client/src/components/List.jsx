import React, { Component } from 'react';
import axios from 'axios';
import ListEntry from './ListEntry';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputField: ''
    };
    this.getTodos = this.getTodos.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('/api')
      .then((todos) => {
        this.setState({
          todos: todos.data
        })
      })
      .catch((err) => console.log(err))
  }

  postTodo(todo) {
    console.log(todo)
    axios
      .post('/api', { todo }) // {todo: todo}
      .then(() => {
        this.getTodos();
      })
      .catch((err) => console.log(err))
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postTodo(this.state.inputField);
    event.target.reset();
  }

  deleteTodo(index) {
    axios
      .delete(`/api/${index}`)
      .then((response) => {
        console.log(response.data);
        this.getTodos();
      })
  }

  updateTodo(index, todo) {
    axios
      .put(`/api/${index}`, { todo })
      .then((response) => {
        console.log(response.data);
        this.getTodos();
      })
  }

  render() {
    return (
      <div>
        <h1>List of things to do</h1>
        <form onSubmit={this.handleSubmit}>
          <h4>New todo:</h4>
          <input onChange={this.handleChange} />
        </form>
        <h4>Current todos</h4>
        <div>
          {this.state.todos.map((todo, i) => {
            return <ListEntry 
            key={i}
            todo={todo} 
            idx={i} 
            getTodos={this.getTodos}
            deleteTodo={this.deleteTodo} 
            updateTodo={this.updateTodo}
            />
          })}
        </div>
      </div>
    );
  }
}

export default List;
