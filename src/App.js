import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// çomponents

import TodoList from "./components/TodoList";

// end of components----

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Songs(with the help of Redux)</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
