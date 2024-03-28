import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	} else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (todo) => {
		console.log("I am ondelete of todo", todo);
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			})
		);
		console.log("deleted", todos);
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const addTodoList = (title, desc) => {
		console.log("I am passing this todo", title, desc);
		let sno;
		if (todos.length === 0) {
			sno = 0;
		} else {
			sno = todos[todos.length - 1].sno + 1;
		}
		const myTodo = {
			sno: sno,
			title: title,
			desc: desc,
		};
		setTodos([...todos, myTodo]);
		console.log(myTodo);
	};

	const [todos, setTodos] = useState(initTodo);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<div>
			<Router>
				<div className="d-flex flex-column min-vh-100">
					<Header title="My Todos List" />
					<div className="flex flex-grow-1">
						<Routes>
							<Route
								exact
								path="/"
								element={
									<>
										<AddTodo addTodoList={addTodoList} />
										<Todos todos={todos} onDelete={onDelete} />
									</>
								}
							/>
							<Route exact path="/about" element={<About />} />
						</Routes>
					</div>

					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
