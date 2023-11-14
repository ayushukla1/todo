import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodoList = (title, desc) => {
    console.log("I am passing this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Header title="My Todos List"/>
      <AddTodo addTodoList={addTodoList}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
