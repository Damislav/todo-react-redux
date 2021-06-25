import {
  ADD_TODO,
  CANCEL_EDIT,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "../actions/types";

const initialState = {
  todos: [
    { title: "I love redux", editing: false },
    { title: "The redux song", editing: false },
    { title: "Run to the redux hill", editing: false },
  ],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((s, i) => i !== action.payload),
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map((todo, i) =>
          i === action.payload
            ? { ...todo, editing: true }
            : { ...todo, editing: false }
        ),
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo, i) =>
          i === action.index
            ? { ...todo, title: action.title, editing: false }
            : todo
        ),
      };
    case CANCEL_EDIT:
      return {
        todos: state.todos.map((todo, i) =>
          i === action.index ? { ...todo, editing: false } : todo
        ),
      };

    default: {
      return state;
    }
  }
}
