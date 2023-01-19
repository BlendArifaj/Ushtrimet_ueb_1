import React, { useState, useEffect} from "react";
import "./App.css";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormTodo } from './components/FormTodo';
import { Todo } from './components/Todo';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isDone: false }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [count, setCount] = useState(0);
  useEffect(
      () => {
          console.log(count);
      },
      [count]
  )

  // return (
  //   <div className="app">
  //     <div className="container">
  //       <h1 className="text-center mb-4">Todo List</h1>
  //       <FormTodo addTodo={addTodo} />
  //       <div>
  //         {todos.map((todo, index) => (
  //           <Card>
  //             <Card.Body>
  //               <Todo
  //               key={index}
  //               index={index}
  //               todo={todo}
  //               markTodo={markTodo}
  //               removeTodo={removeTodo}
  //               />
  //             </Card.Body>
  //           </Card>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <div>{count}</div>
      <Button onClick={() => setCount(count+1)} >Click</Button>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path='/about' element={<Users/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  </Router>
  );

}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
