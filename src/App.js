import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/style.css";
// çomponents

import TodoList from "./components/TodoList";
import Header from "./components/Header/Header";

// end of components----

class App extends React.Component {
  render() {
    return (
      <>
        <div className="Header">
          <Header />
        </div>
        <h1 className="title">TODO with react and redux</h1>
        <TodoList />
      </>
    );
  }
}

export default App;
