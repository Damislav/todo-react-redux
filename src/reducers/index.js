import { combineReducers } from "redux";

import todoReducers from "./todoReducers";

const allReducers = combineReducers({
  todos: todoReducers,
});

export default allReducers;
