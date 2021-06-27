import {
  ADD_TODO,
  CANCEL_EDIT,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_CHECKBOX,
  UPDATE_TODO,
} from "../actions/types";
import { todos } from "../data";

export const todoReducers = (state = { todos }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, editing: true }
            : { ...todo, editing: false }
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.index
            ? { ...todo, title: action.title, editing: false }
            : todo
        ),
      };
    case CANCEL_EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.index ? { ...todo, editing: false } : todo
        ),
      };
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, checkbox: !todo.checkbox }
            : todo
        ),
      };

    default: {
      return state;
    }
  }
};
