import React, { useState } from 'react';

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    }
    else {
      props.addTodoList(title, desc);
    }
    setTitle("");
    setDesc("");
  }
  return (
    <div className="container my-3 w-75">
      <h3 className='text-center my-3'>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
