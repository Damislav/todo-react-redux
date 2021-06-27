import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  addTodo,
  removeTodo,
  editTodo,
  updateTodo,
  cancelEdit,
  toggleCheckbox,
} from "../actions/todoAction";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      currentVal: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    this.cancel = this.cancel.bind(this);
    this.updatedVal = this.updatedVal.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.newTodo) {
      const addedTodo = {
        title: this.state.newTodo,
        editing: false,
        checkbox: false,
        id: uuidv4(),
      };

      this.props.addTodo(addedTodo);
      this.setState({ newTodo: "" });
    }
  }
  updatedVal(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  remove(id) {
    this.props.removeTodo(id);
  }
  edit(i, title) {
    this.props.editTodo(i);
    this.setState({ currentVal: title });
  }
  update(i) {
    this.props.updateTodo(this.state.currentVal, i);

    this.setState({ currentVal: "" });
  }
  cancel(i) {
    this.props.cancelEdit(i);
  }
  handleCheckbox = (i) => {
    // console.log(i);
    // console.log(this.props.todos[i]);
    this.props.toggleCheckbox(i);
  };

  render() {
    //destructure from redux  state
    const { todos } = this.props;
    const { searchField } = this.props;
    // ¸end of destruct

    //  search todos search
    const filteredTodos = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchField.toLowerCase());
    });
    // ¸end of search todos search

    return (
      <ul className="todo-wrapper">
        {filteredTodos.map((todo, i) => {
          return (
            <Todo
              todo={todo}
              id={i}
              isChecked={todo.checkbox}
              currentVal={this.state.currentVal}
              key={i}
              updatedVal={this.updatedVal}
              handleCheckbox={() => this.handleCheckbox(todo.id)}
              update={() => this.update(todo.id)}
              cancel={() => this.cancel(todo.id)}
              remove={() => this.remove(todo.id)}
              edit={() => this.edit(todo.id, todo.title)}
            />
          );
        })}
        <TodoForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          newTodo={this.state.newTodo}
        />
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todoId) => dispatch(addTodo(todoId)),
    removeTodo: (todoId) => dispatch(removeTodo(todoId)),
    editTodo: (index) => dispatch(editTodo(index)),
    updateTodo: (title, index) => dispatch(updateTodo(title, index)),
    cancelEdit: (index) => dispatch(cancelEdit(index)),
    toggleCheckbox: (index) => dispatch(toggleCheckbox(index)),
  };
};
// const dispatchToProps = () => {};
const mapStateToProps = (state, ownProps) => {
  return {
    ...state.todos,
    ...state.searchField,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
