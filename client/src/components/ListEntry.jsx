import React, { Component } from 'react';

class ListEntry extends Component {
  constructor(props) {
    super(props);
      this.state = {
        editMode: false,
        editField: ''
      }
      this.toggleEditMode = this.toggleEditMode.bind(this);
      this.handleEditField = this.handleEditField.bind(this);
      this.handleSaveTodo = this.handleSaveTodo.bind(this);
    }


    toggleEditMode(event) {
      this.setState({
        editMode: !this.state.editMode,
        editField: this.props.todo
      })
    }

    handleEditField(event) {
      this.setState({
        editField: event.target.value
      })
    }

    handleSaveTodo(event) {
      this.props.updateTodo(this.props.idx, this.state.editField);
      this.toggleEditMode();
    }
  
  render() {
    let { editMode, editField } = this.state;
    let { todo, idx, deleteTodo } = this.props;
    let liTodo;
    let buttons;

    if (editMode) {
      liTodo = (<input value={editField} onChange={this.handleEditField}/>)
      buttons = (
      <div>
        <button onClick={this.handleSaveTodo}>save</button>
      </div>
      )
    } else {
      liTodo = (<li>{todo}</li>)
      buttons = (
      <div>
        <button onClick={this.toggleEditMode}>edit</button>
        <button onClick={() => deleteTodo(idx)}>X</button>
      </div>
      )
    }
    
    return (
      <div>
        {liTodo}
        {buttons}
      </div>
    )
  }
}

export default ListEntry;
