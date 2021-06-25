import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <form className="form" onSubmit={props.onSubmit}>
        <input
          className="input-button"
          type="text"
          name="newTodo"
          value={props.newTodo}
          onChange={props.onChange}
        />
        <input className="add-button" type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default TodoForm;
