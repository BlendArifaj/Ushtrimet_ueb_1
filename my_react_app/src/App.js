import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';

import { Button, Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App1(){
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log("useEffect called!");
    },
    []
  )

  function increaseCount(){
    setCount(count + 1);
  }

  return (
    <Card>
        <Card.Body>
          <Card.Text>
            Number of clicks: {count} 
          </Card.Text>
          <Button variant="primary" onClick={increaseCount}>
                Click me
          </Button>
        </Card.Body>
    </Card>    
  )
}

function App() {



  return (
    <Router>
      <div>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/' element={
          <App1 />
          } />
        </Routes>
      </div>
    </Router>
  );
}

    {/* <Home message="Ushtrimet me ReactJS!" /> */}

export default App;
