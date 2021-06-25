import TodoList from "./components/TodoList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1 className="title">Songs(with the help of Redux)</h1>

        <TodoList />
      </div>
    );
  }
}

export default App;
