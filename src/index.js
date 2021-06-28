import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// REDUX

// ¸middleware

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
//  end of middleware

import { Provider } from "react-redux";
import rootReducers from "./reducers";

// ¸END OF REDUX

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </Provider>,
  document.getElementById("root")
);
