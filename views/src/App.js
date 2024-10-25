
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoList from './TodoList';
import RegistrationForm from './RegistrationForm';
import UserTable from './UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center">My Application</h1>
        <nav className="nav justify-content-center mb-4">
          <Link className="nav-link" to="/">Todo List</Link>
          <Link className="nav-link" to="/registration">Registration Form</Link>
          <Link className="nav-link" to="/users">User Table</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/users" element={<UserTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


