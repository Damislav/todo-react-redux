import { combineReducers } from "redux";
import { todoReducers } from "./todoReducers";
import { searchReducer } from "./searchReducer";

const rootReducers = combineReducers({
  todos: todoReducers,
  searchField: searchReducer,
});

export default rootReducers;
