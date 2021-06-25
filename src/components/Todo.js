import React from "react";
import { Fragment } from "react";
const Todo = (props) => {
  return (
    <div>
      <Fragment key={props.todo.title}>
        {!props.todo.editing ? (
          <li>
            {props.todo.title}
            <span>
              <button onClick={props.remove}>Delete</button>
              <button onClick={props.edit}>Edit</button>
            </span>
          </li>
        ) : (
          <>
            <form>
              <input
                type="text"
                name="currentVal"
                value={props.currentVal}
                onChange={props.updatedVal}
              />
            </form>
            <span>
              <button onClick={props.cancel}>Cancel</button>
              <button onClick={props.update}>Update</button>
            </span>
          </>
        )}
      </Fragment>
    </div>
  );
};

export default Todo;
