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
  }

  componentDidMount() {
    // grab all the todos
    this.getTodos();
  }

  getTodos() {
    // send GET req to our server
    axios
      .get('/api')
      .then((todos) => {
        this.setState({
          todos: todos.data
        }, () => console.log(this.state))
      })
      .catch((err) => console.log(err))
  }

  postTodo(todo) {
    // add todo to our "database" (array)
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
    event.preventDefault(); // prevents page from reloading after submit
    this.postTodo(this.state.inputField);
    event.target.reset(); // clears formfield
  }

  deleteTodo(index) {
    axios
      .delete(`/api/${index}`) // 'localhost:3000/api/index'
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
            return <ListEntry todo={todo} idx={i} deleteTodo={this.deleteTodo}/>
          })}
        </div>
      </div>
    );
  }
}

export default List;
