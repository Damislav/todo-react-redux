import { CHANGE_SEARCHFIELD } from "../actions/types";

const initialState = {
  searchField: "",
};

export const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default: {
      return state;
    }
  }
};
