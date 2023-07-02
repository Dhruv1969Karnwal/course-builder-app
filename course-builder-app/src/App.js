import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/home/Home';
import Header from './components/Layout/header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/Layout/footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
