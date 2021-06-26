import React, { Component } from "react";
import { connect } from "react-redux";
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
  remove(i) {
    this.props.removeTodo(i);
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
    console.log(i);
    console.log(this.props.todos[i]);
    this.props.toggleCheckbox(i);
  };

  render() {
    const { todos } = this.props;

    return (
      <ul className="todo-wrapper">
        {todos.map((todo, i) => {
          return (
            <Todo
              id={i}
              handleCheckbox={() => this.handleCheckbox(i)}
              isChecked={todo.checkbox}
              currentVal={this.state.currentVal}
              key={i}
              updatedVal={this.updatedVal}
              update={() => this.update(i)}
              cancel={() => this.cancel(i)}
              todo={todo}
              remove={() => this.remove(i)}
              edit={() => this.edit(i, todo.title)}
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

const mapStateToProps = (state) => {
  return state.todos;
};

export default connect(mapStateToProps, {
  addTodo,
  removeTodo,
  editTodo,
  updateTodo,
  cancelEdit,
  toggleCheckbox,
})(TodoList);
