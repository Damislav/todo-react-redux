import {
  ADD_TODO,
  CANCEL_EDIT,
  CHANGE_SEARCHFIELD,
  DELETE_TODO,
  EDIT_TODO,
  REQUEST_TODOS_FAILED,
  REQUEST_TODOS_PENDING,
  REQUEST_TODOS_SUCCESS,
  TOGGLE_CHECKBOX,
  UPDATE_TODO,
} from "./types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (index) => {
  return {
    type: DELETE_TODO,
    payload: index,
  };
};

export const editTodo = (index) => {
  return {
    type: EDIT_TODO,
    payload: index,
  };
};

export const updateTodo = (title, index) => {
  return {
    type: UPDATE_TODO,
    title,
    index,
  };
};

export const cancelEdit = (index) => {
  return {
    type: CANCEL_EDIT,
    index,
  };
};

export const toggleCheckbox = (index) => {
  return {
    type: TOGGLE_CHECKBOX,
    payload: index,
  };
};

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
};
