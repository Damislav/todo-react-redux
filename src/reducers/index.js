import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";

import { todoReducers } from "./todoReducers";

const rootReducers = combineReducers({
  todos: todoReducers,
  searchField: searchReducer,
});

export default rootReducers;
