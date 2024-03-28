
import React from 'react';
import TodoItem from './TodoItem';

function Todos(props) {
  let mystyle = {
    minHeight: "35vh",
    margin: "40px auto"
  }
  return (
    <div className='container w-75' style={mystyle}>
      <h3 className='text-center my-3 w-100'>Todos List</h3>
      {
        props.todos.length === 0 ? "Hurrah! No Work to do." :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
      }
    </div>
  );
}

export default Todos;
