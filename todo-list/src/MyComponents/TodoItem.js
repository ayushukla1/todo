import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div className="w-100 mx-auto">
      <div className="d-flex justify-content-between">
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
        </div>
        <div className="ms-auto my-auto">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default TodoItem;
