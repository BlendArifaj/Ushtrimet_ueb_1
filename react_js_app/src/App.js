import React from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap';

export default function App() {
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
          <Route path="/about" element={ <About/>} />
          <Route path="/users" element={ <Users/>} />
          <Route path="/" element={ <Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

function About(){
  return (
    <div>
      About page
    </div>
  )
}

function Users(){
  return (
    <div>
      Users page
    </div>
  )
}